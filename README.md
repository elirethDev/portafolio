# Pablo Soler — Portfolio

Portafolio profesional de **Pablo Soler**, Fullstack Developer.

Web bilingüe (Español / English) con detección de idioma por sistema y selector manual,
construida con [SvelteKit](https://svelte.dev/docs/kit) y desplegada en **Cloudflare Pages**.

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5 con runes)
- TypeScript
- `@sveltejs/adapter-cloudflare`

## Desarrollo

```bash
npm install
npm run dev
```

## Verificar el tipado

```bash
npm run check
```

## Build de producción

```bash
npm run build
```

## Deploy en Cloudflare Pages

1. Conectá el repo en el dashboard de Cloudflare Pages.
2. Framework preset: **SvelteKit**.
3. Build command: `npm run build` · Build output: `.svelte-kit/cloudflare`.

### Variable de entorno: `CONTACT_EMAIL`

El formulario de contacto reenvía los mensajes a través de FormSubmit, y el
destinatario se lee de la variable de entorno `CONTACT_EMAIL` (solo lado
servidor — el correo no queda expuesto en el HTML del cliente ni en el repo).

Setéala en Cloudflare Pages → tu proyecto → **Settings → Environment variables**:

```
CONTACT_EMAIL = tu@email.com
```

Sin esta variable, el endpoint `POST /api/contact` responde `500`.
La primera vez que llegue un mensaje real, FormSubmit enviará un correo de
confirmación a esa casilla; confirmalo una sola vez y de ahí en más cada
mensaje del formulario te llega directo.

Protección antispam: campos obligatorios + validación de email + honeypot
oculto (los bots lo llenan y se descartan en silencio).

## Estructura del idioma

El texto se centraliza en `src/lib/i18n/dictionary.ts`. Para agregar o cambiar
una traducción:

1. Añadí la clave en el diccionario (ambas locales, `es` y `en`).
2. Usala en un componente con `i18n.t('grupo.clave')`.

La detección de idioma sigue este orden de prioridad:

1. Cookie `locale` (elección manual del usuario, persiste 1 año).
2. Cabecera `Accept-Language` del navegador / sistema.
3. Fallback: `en`.
