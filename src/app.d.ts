// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	interface Window {
		turnstile?: {
			render: (
				container: string | HTMLElement,
				opts: {
					sitekey: string;
					callback?: (token: string) => void;
					'expired-callback'?: () => void;
					'error-callback'?: () => void;
				}
			) => number;
			reset: (widgetId?: number) => void;
		};
	}

	namespace App {
		// interface Error {}
		interface Locals {
			locale: 'es' | 'en';
		}
		// interface PageData {}
		// interface PageState {}
		interface Platform {
			// Available on Cloudflare Pages
			env: Record<string, unknown>;
			cf: unknown;
			ctx: unknown;
		}
	}
}

export {};
