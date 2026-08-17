import { getContext, setContext } from 'svelte';
import { dictionary } from './dictionary';
import type { Locale } from './locales';
import type { Dict } from './dictionary';

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

	function translate(flatKey: TranslationKey): string {
		// Navigate the dotted path (e.g. "stack.categories.languages") through
		// the dictionary tree and return the entry for the current locale.
		let node: unknown = dictionary;
		for (const segment of flatKey.split('.')) {
			if (node && typeof node === 'object' && segment in (node as Record<string, unknown>)) {
				node = (node as Record<string, unknown>)[segment];
			} else {
				return flatKey;
			}
		}
		if (node && typeof node === 'object' && locale in (node as Record<string, unknown>)) {
			return String((node as Record<string, unknown>)[locale]);
		}
		return flatKey;
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

type TranslationLeaf = Record<Locale, string>;
export type TranslationKey<T = Dict, Prefix extends string = ''> = {
	[K in keyof T & string]: T[K] extends TranslationLeaf
		? `${Prefix}${K}`
		: T[K] extends object
			? TranslationKey<T[K], `${Prefix}${K}.`>
			: never;
}[keyof T & string];

export function setI18nContext(i18n: I18n) {
	setContext(CONTEXT_KEY, i18n);
}

export function getI18nContext(): I18n {
	return getContext<I18n>(CONTEXT_KEY);
}
