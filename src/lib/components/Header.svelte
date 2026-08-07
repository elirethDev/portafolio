<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';
	import type { Locale } from '$lib/i18n/locales';
	import { locales } from '$lib/i18n/locales';

	let { i18n }: { i18n: I18n } = $props();

	let scrolled = $state(false);

	function onscroll() {
		scrolled = window.scrollY > 8;
	}

	$effect(() => {
		onscroll();
		window.addEventListener('scroll', onscroll, { passive: true });
		return () => window.removeEventListener('scroll', onscroll);
	});

	function setLanguage(locale: Locale) {
		i18n.setLocale(locale);
		document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
		// Keep the <html lang> attribute in sync for accessibility/SEO.
		document.documentElement.lang = locale;
	}
</script>

<header class="header" class:scrolled>
	<nav class="container nav" aria-label="Main">
		<a href="#top" class="brand">Pablo<span class="brand-dot">.</span></a>

		<div class="links">
			<a href="#about">{i18n.t('nav.about')}</a>
			<a href="#stack">{i18n.t('nav.stack')}</a>
			<a href="#projects">{i18n.t('nav.projects')}</a>
			<a href="#contact">{i18n.t('nav.contact')}</a>
		</div>

		<div class="lang" role="group" aria-label="Language">
			{#each locales as l (l)}
				<button
					class="lang-btn"
					class:active={i18n.locale === l}
					aria-pressed={i18n.locale === l}
					onclick={() => setLanguage(l)}
				>
					{i18n.t(`toggle.${l}`)}
				</button>
			{/each}
		</div>
	</nav>
</header>

<style>
	.header {
		position: fixed;
		inset-inline: 0;
		top: 0;
		z-index: 50;
		background: transparent;
		transition: background 0.2s ease, box-shadow 0.2s ease, backdrop-filter 0.2s ease;
	}

	.header.scrolled {
		background: rgba(11, 16, 32, 0.8);
		backdrop-filter: blur(10px);
		box-shadow: var(--shadow-sm);
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		height: 4rem;
	}

	.brand {
		font-size: 1.25rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--text);
	}

	.brand-dot {
		color: var(--accent);
	}

	.links {
		display: flex;
		gap: var(--space-6);
	}

	.links a {
		color: var(--text-muted);
		font-weight: 500;
		font-size: 0.95rem;
	}

	.links a:hover {
		color: var(--text);
	}

	.lang {
		display: flex;
		gap: var(--space-1);
		padding: 0.2rem;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
	}

	.lang-btn {
		background: transparent;
		border: none;
		color: var(--text-muted);
		font-family: inherit;
		font-size: 0.85rem;
		font-weight: 600;
		padding: 0.35rem 0.6rem;
		border-radius: calc(var(--radius-md) - 3px);
		cursor: pointer;
		transition: background 0.15s ease, color 0.15s ease;
	}

	.lang-btn:hover {
		color: var(--text);
	}

	.lang-btn.active {
		background: var(--accent);
		color: var(--accent-contrast);
	}

	@media (max-width: 36rem) {
		.links {
			display: none;
		}
	}
</style>
