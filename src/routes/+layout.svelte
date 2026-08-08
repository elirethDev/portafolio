<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { untrack } from 'svelte';
	import { createI18n, setI18nContext } from '$lib/i18n/i18n.svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();

	// `untrack` reads the initial server locale without subscribing to reactivity:
	// from here on the language toggle owns the reactive state.
	const locale = untrack(() => data.locale);
	const i18n = createI18n(locale);
	setI18nContext(i18n);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Pablo Soler — Fullstack Engineer</title>
	<meta name="description" content="Fullstack engineer building products from kernel to cloud. JavaScript/TypeScript, Go, Python, C++, Docker, Kubernetes, Cloudflare." />
	<meta name="author" content="Pablo Soler" />
	<meta name="theme-color" content="#0a0e1a" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Pablo Soler — Fullstack Engineer" />
	<meta property="og:title" content="Pablo Soler — Fullstack Engineer" />
	<meta
		property="og:description"
		content="Building products from kernel to cloud. JavaScript/TypeScript, Go, Python, C++, Docker, Kubernetes, Cloudflare."
	/>
	<meta property="og:url" content="https://pablosoler.pages.dev/" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Pablo Soler — Fullstack Engineer" />
	<meta
		name="twitter:description"
		content="Building products from kernel to cloud. JavaScript/TypeScript, Go, Python, C++, Docker, Kubernetes, Cloudflare."
	/>
</svelte:head>

<Header {i18n} />

<main>
	{@render children()}
</main>

<Footer {i18n} />
