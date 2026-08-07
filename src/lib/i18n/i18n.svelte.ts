import { getContext, setContext } from 'svelte';
import { dictionary, type DictKey } from './dictionary';
import type { Locale } from './locales';

const CONTEXT_KEY = 'i18n';

/**
 * A reactive locale state object managed with Svelte runes.
 * Provide it in +layout.svelte and consume it via `useI18n()`.
 */
export function createI18n(initialLocale: Locale) {
	let locale = $state(initialLocale);

	function setLocale(next: Locale) {
		locale = next;
	}

	function translate(flatKey: string): string {
		// flatKey is a dotted path like "hero.tagline"
		const [group, key] = flatKey.split('.');
		const groupDict = dictionary[group as DictKey];
		if (!groupDict) return flatKey;
		const entry = (groupDict as Record<string, Record<Locale, string>>)[key];
		if (!entry) return flatKey;
		return entry[locale];
	}

	return {
		get locale() {
			return locale;
		},
		setLocale,
		t: translate
	};
}

export type I18n = ReturnType<typeof createI18n>;

export function setI18nContext(i18n: I18n) {
	setContext(CONTEXT_KEY, i18n);
}

export function getI18nContext(): I18n {
	return getContext<I18n>(CONTEXT_KEY);
}
