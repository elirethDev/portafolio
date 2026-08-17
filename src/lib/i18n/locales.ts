export type Locale = 'es' | 'en';

export const locales: Locale[] = ['es', 'en'];

/**
 * Detect the browser/system language from the Accept-Language header.
 * Falls back to 'en'.
 */
export function detectLocale(header: string | null): Locale {
	if (!header) return 'en';
	const candidates = header
		.split(',')
		.map((part) => {
			const [tag, ...parameters] = part.trim().toLowerCase().split(';');
			const quality = parameters.find((parameter) => parameter.trim().startsWith('q='));
			const q = quality ? Number(quality.trim().slice(2)) : 1;
			return { tag, q: Number.isFinite(q) ? q : 0 };
		})
		.filter(({ q }) => q > 0)
		.sort((a, b) => b.q - a.q);

	for (const { tag } of candidates) {
		if (tag === 'es' || tag.startsWith('es-')) return 'es';
		if (tag === 'en' || tag.startsWith('en-')) return 'en';
	}
	return 'en';
}

export function isLocale(value: string | null | undefined): value is Locale {
	return value === 'es' || value === 'en';
}
