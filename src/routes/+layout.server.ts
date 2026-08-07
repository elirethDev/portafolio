import type { LayoutServerLoad } from './$types';
import { isLocale } from '$lib/i18n/locales';

/**
 * Provide the resolved locale to the client so the layout can initialize
 * the reactive i18n store with the correct language on mount.
 */
export const load: LayoutServerLoad = ({ locals }) => {
	return {
		locale: isLocale(locals.locale) ? locals.locale : 'en'
	};
};
