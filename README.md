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

## Estructura del idioma

El texto se centraliza en `src/lib/i18n/dictionary.ts`. Para agregar o cambiar
una traducción:

1. Añadí la clave en el diccionario (ambas locales, `es` y `en`).
2. Usala en un componente con `i18n.t('grupo.clave')`.

La detección de idioma sigue este orden de prioridad:

1. Cookie `locale` (elección manual del usuario, persiste 1 año).
2. Cabecera `Accept-Language` del navegador / sistema.
3. Fallback: `en`.
