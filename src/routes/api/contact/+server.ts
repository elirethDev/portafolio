import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

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
	const form = await request.formData();
	const name = String(form.get('name') ?? '').trim();
	const email = String(form.get('email') ?? '').trim();
	const message = String(form.get('message') ?? '').trim();
	const website = String(form.get('website') ?? '').trim();
	const token = String(form.get('cf-turnstile-response') ?? '').trim();

	const recipient = env.CONTACT_EMAIL;
	if (!recipient) {
		return json({ ok: false, error: 'server_not_configured' }, { status: 500 });
	}

	if (!token || !env.TURNSTILE_SECRET_KEY) {
		return json({ ok: false, error: 'captcha_required' }, { status: 400 });
	}

	const verify = await fetch(TURNSTILE_VERIFY_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			secret: env.TURNSTILE_SECRET_KEY,
			response: token,
			remoteip: request.headers.get('cf-connecting-ip') ?? ''
		})
	}).then((r) => r.json());

	if (!verify.success) {
		return json({ ok: false, error: 'captcha_failed' }, { status: 400 });
	}

	// Honeypot: bots auto-fill hidden fields; discard silently and look legit.
	if (website) {
		return json({ ok: true });
	}

	if (!name || !email || !message || !EMAIL_RE.test(email)) {
		return json({ ok: false, error: 'invalid' }, { status: 400 });
	}

	const payload = {
		_subject: `[Portafolio] Nuevo mensaje de ${name}`,
		_template: 'table',
		Nombre: name,
		Email: email,
		Mensaje: message
	};

	const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
			Origin: 'https://pablosoler.pages.dev',
			Referer: 'https://pablosoler.pages.dev/'
		},
		body: JSON.stringify(payload)
	});

	if (res.ok) {
		return json({ ok: true });
	}
	return json({ ok: false, error: 'delivery_failed' }, { status: 502 });
}
