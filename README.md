# Pablo Soler — Portfolio

Portafolio profesional bilingüe (Español / English) de **Pablo Soler**, Fullstack Engineer. La aplicación usa detección de idioma por `Accept-Language`, selector manual persistido en cookie y despliegue en Cloudflare Pages.

## Quick path

1. Install dependencies with `npm install`.
2. Copy the environment variables below into a local `.env` file.
3. Start the app with `npm run dev`.
4. Run `npm run check`, `npm test`, and `npm run build` before deploying.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) with Svelte 5 runes
- TypeScript
- `@sveltejs/adapter-cloudflare`
- Vitest for pure validation and locale tests

## Environment

The following values are server-only unless marked public. Never expose `CONTACT_EMAIL` or `TURNSTILE_SECRET_KEY` in client code.

| Variable | Required | Purpose |
| --- | --- | --- |
| `CONTACT_EMAIL` | Yes | Recipient address used by the server to call FormSubmit |
| `TURNSTILE_SECRET_KEY` | Yes | Cloudflare Turnstile secret for server-side verification |
| `PUBLIC_SITE_URL` | Recommended | Canonical/public origin, for example `https://pablosoler.pages.dev` |
| `PUBLIC_ORIGIN` or `SITE_URL` | Optional fallback | Existing-compatible public-origin names |

When an `Origin` header is present, the contact endpoint validates that it matches the request origin or configured public origin; requests without an `Origin` header are accepted. The endpoint also requires bounded form fields, a valid Turnstile token, and the existing honeypot. It deliberately does not use an in-memory IP limiter because that is unreliable across Cloudflare Pages isolates. Turnstile, origin validation, honeypot, request limits, and upstream timeouts are the practical serverless controls.

## Cloudflare Pages

Use these project settings:

- Build command: `npm run build`
- Build output directory: `.svelte-kit/cloudflare`
- Node version: 20 or newer
- Add the environment variables above to both Preview and Production as appropriate.

Turnstile is loaded from `https://challenges.cloudflare.com` in the browser. The server verifies tokens server-side by posting them to Cloudflare's Turnstile verification endpoint at `https://challenges.cloudflare.com/turnstile/v0/siteverify`, then sends the message server-to-server to FormSubmit at `https://formsubmit.co`; FormSubmit does not need to be added to browser `connect-src` because the browser never calls it directly. The CSP in `src/hooks.server.ts` documents and permits the Turnstile script, frame, and connection origins.

## Contact and privacy

The form sends the submitted name, email, and message to FormSubmit so the site owner can reply. Cloudflare Turnstile processes anti-abuse signals to determine whether a submission is human. The UI discloses this processing next to the form. Do not submit sensitive personal information.

## Checks

```sh
npm run check
npm test
npm run build
```

`npm run check` runs Svelte and TypeScript diagnostics. `npm test` covers the pure contact validator and `Accept-Language` parser. `npm run build` verifies the Cloudflare deployment bundle.
