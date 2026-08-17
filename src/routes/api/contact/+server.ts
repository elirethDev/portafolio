import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import {
	exceedsContactLimit,
	normalizeContactFields,
	validateContactFields,
	type ContactFields
} from '$lib/contact-validation';

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const MAX_BODY_BYTES = 32_000;
const REQUEST_TIMEOUT_MS = 8_000;

type TurnstileResponse = { success: true } | { success: false };

function textField(form: FormData, name: string): string {
	const value = form.get(name);
	return typeof value === 'string' ? value : '';
}

function publicOrigin(request: Request): string {
	return (
		env.PUBLIC_SITE_URL ?? env.PUBLIC_ORIGIN ?? env.SITE_URL ?? new URL(request.url).origin
	).replace(/\/$/, '');
}

function isSameOrigin(request: Request): boolean {
	const origin = request.headers.get('origin');
	if (!origin) return true;
	const requestOrigin = new URL(request.url).origin;
	const normalizedOrigin = origin.replace(/\/$/, '');
	return normalizedOrigin === requestOrigin || normalizedOrigin === publicOrigin(request);
}

async function fetchWithTimeout(input: RequestInfo | URL, init: RequestInit): Promise<Response> {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
	try {
		return await fetch(input, { ...init, signal: controller.signal });
	} finally {
		clearTimeout(timeout);
	}
}

/**
 * Contact form endpoint.
 *
 * - Turnstile: the token is verified against Cloudflare to reject bots before
 *   any delivery happens. A valid human token is required.
 * - Honeypot: the hidden `website` field catches naive bots.
 * - The recipient address is read from the server-only `CONTACT_EMAIL`
 *   environment variable, so the personal email is never exposed to the
 *   client nor bundled into the public source.
 * - Actual delivery is delegated to FormSubmit (server-to-server, with
 *   browser-like headers so FormSubmit accepts the request).
 */
export async function POST({ request }) {
	if (request.method !== 'POST' || !isSameOrigin(request)) {
		return json({ ok: false, error: 'forbidden' }, { status: 403 });
	}
	const contentType = request.headers.get('content-type') ?? '';
	if (!contentType.startsWith('multipart/form-data') && !contentType.startsWith('application/x-www-form-urlencoded')) {
		return json({ ok: false, error: 'invalid_request' }, { status: 415 });
	}

	const contentLength = Number(request.headers.get('content-length') ?? 0);
	if (contentLength > MAX_BODY_BYTES) {
		return json({ ok: false, error: 'request_too_large' }, { status: 413 });
	}

	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return json({ ok: false, error: 'invalid_request' }, { status: 400 });
	}

	const fields = normalizeContactFields({
		name: textField(form, 'name'),
		email: textField(form, 'email'),
		message: textField(form, 'message'),
		website: textField(form, 'website'),
		token: textField(form, 'cf-turnstile-response')
	});
	const { name, email, message, website, token } = fields;

	if (exceedsContactLimit(fields)) {
		return json({ ok: false, error: 'request_too_large' }, { status: 413 });
	}

	const recipient = env.CONTACT_EMAIL;
	if (!recipient) {
		return json({ ok: false, error: 'server_not_configured' }, { status: 500 });
	}

	if (!env.TURNSTILE_SECRET_KEY) {
		return json({ ok: false, error: 'server_not_configured' }, { status: 500 });
	}

	if (!token) {
		return json({ ok: false, error: 'captcha_required' }, { status: 400 });
	}

	const validationError = validateContactFields(fields);
	if (validationError) {
		return json({ ok: false, error: validationError === 'captcha' ? 'captcha_required' : 'invalid' }, { status: 400 });
	}

	let verify: TurnstileResponse;
	try {
		const verifyResponse = await fetchWithTimeout(TURNSTILE_VERIFY_URL, {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token })
		});
		if (!verifyResponse.ok) throw new Error('turnstile_http_error');
		const body: unknown = await verifyResponse.json();
		verify = body && typeof body === 'object' && 'success' in body && body.success === true
			? { success: true }
			: { success: false };
	} catch {
		return json({ ok: false, error: 'captcha_unavailable' }, { status: 502 });
	}

	if (!verify.success) {
		return json({ ok: false, error: 'captcha_failed' }, { status: 400 });
	}

	// Honeypot: bots auto-fill hidden fields; discard silently and look legit.
	if (website) {
		return json({ ok: true });
	}

	const payload = {
		_subject: `[Portafolio] Nuevo mensaje de ${name}`,
		_template: 'table',
		Nombre: name,
		Email: email,
		Mensaje: message
	};

	let res: Response;
	try {
		res = await fetchWithTimeout(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Origin: publicOrigin(request),
				Referer: `${publicOrigin(request)}/`
			},
			body: JSON.stringify(payload)
		});
	} catch {
		return json({ ok: false, error: 'delivery_failed' }, { status: 502 });
	}

	if (res.ok) {
		return json({ ok: true });
	}
	return json({ ok: false, error: 'delivery_failed' }, { status: 502 });
}
