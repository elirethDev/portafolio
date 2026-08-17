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
	<title>{i18n.t('seo.title')}</title>
	<meta name="description" content={i18n.t('seo.description')} />
	<meta name="author" content="Pablo Soler" />
	<meta name="theme-color" content="#0a0e1a" />
	<link rel="canonical" href={`${data.origin}/`} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={i18n.t('seo.title')} />
	<meta property="og:title" content={i18n.t('seo.title')} />
	<meta property="og:description" content={i18n.t('seo.description')} />
	<meta property="og:url" content={`${data.origin}/`} />
	<meta property="og:locale" content={i18n.locale === 'es' ? 'es_ES' : 'en_US'} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={i18n.t('seo.title')} />
	<meta name="twitter:description" content={i18n.t('seo.description')} />
</svelte:head>

<Header {i18n} />

<a class="skip-link" href="#main-content">Skip to content</a>
<main id="main-content" tabindex="-1">
	{@render children()}
</main>

<Footer {i18n} />
