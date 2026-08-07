export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];

/**
 * Detect the browser/system language from the Accept-Language header.
 * Falls back to 'en'.
 */
export function detectLocale(header: string | null): Locale {
	if (!header) return 'en';
	// Accept-Language example: "es-ES,es;q=0.9,en;q=0.8"
	if (/es/i.test(header)) return 'es';
	return 'en';
}

export function isLocale(value: string | null | undefined): value is Locale {
	return value === 'es' || value === 'en';
}
