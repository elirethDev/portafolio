// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
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
