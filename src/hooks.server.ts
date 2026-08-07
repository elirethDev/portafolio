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

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', locale)
	});
};
