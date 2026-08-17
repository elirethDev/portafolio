import type { Handle } from '@sveltejs/kit';
import { detectLocale, isLocale, type Locale } from '$lib/i18n/locales';

const LOCALE_COOKIE = 'locale';

/**
 * Resolve the locale for each request:
 * 1. A manual choice persisted in a cookie (highest priority).
 * 2. The browser/system Accept-Language header.
 * 3. 'en' as fallback.
 */
export const handle: Handle = async ({ event, resolve }) => {
	const cookieLocale = event.cookies.get(LOCALE_COOKIE);
	const header = event.request.headers.get('accept-language');

	let locale: Locale;
	if (isLocale(cookieLocale)) {
		locale = cookieLocale;
	} else {
		locale = detectLocale(header);
	}

	event.locals.locale = locale;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});

	const headers = new Headers(response.headers);
	headers.set('X-Content-Type-Options', 'nosniff');
	headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
	if (event.url.protocol === 'https:') headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
	return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
};
