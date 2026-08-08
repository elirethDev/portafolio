import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact form endpoint.
 *
 * The recipient address is read from the server-only `CONTACT_EMAIL`
 * environment variable, so the personal email is never exposed to the
 * client nor bundled into the public source. The actual delivery is
 * delegated to FormSubmit.
 */
export async function POST({ request }) {
	const recipient = env.CONTACT_EMAIL;
	if (!recipient) {
		return json({ ok: false, error: 'server_not_configured' }, { status: 500 });
	}

	const form = await request.formData();
	const name = String(form.get('name') ?? '').trim();
	const email = String(form.get('email') ?? '').trim();
	const message = String(form.get('message') ?? '').trim();
	const website = String(form.get('website') ?? '').trim();

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
		headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
		body: JSON.stringify(payload)
	});

	if (res.ok) {
		return json({ ok: true });
	}
	return json({ ok: false, error: 'delivery_failed' }, { status: 502 });
}
