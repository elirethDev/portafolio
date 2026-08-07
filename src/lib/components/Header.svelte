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
		<a href="#top" class="brand">
			<span class="brand-bracket" aria-hidden="true">&lt;/&gt;</span>
			<span>pablo.dev</span>
		</a>

		<div class="links">
			<a href="#about">{i18n.t('nav.about')}</a>
			<a href="#stack">{i18n.t('nav.stack')}</a>
			<a href="#projects">{i18n.t('nav.projects')}</a>
			<a href="#contact">{i18n.t('nav.contact')}</a>
		</div>

		<div class="right">
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
			<a class="btn btn-primary nav-cta" href="#contact">
				{i18n.t('nav.cta')}
			</a>
		</div>
	</nav>
</header>

<style>
	.header {
		position: fixed;
		inset-inline: 0;
		top: 0;
		z-index: 50;
		transition: background 0.2s ease, box-shadow 0.2s ease, backdrop-filter 0.2s ease,
			border-color 0.2s ease;
		border-bottom: 1px solid transparent;
	}

	.header.scrolled {
		background: rgba(10, 14, 26, 0.72);
		backdrop-filter: blur(12px);
		border-bottom-color: var(--border);
		box-shadow: var(--shadow-sm);
	}

	.nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		height: 4.25rem;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 1.05rem;
		color: var(--text);
	}

	.brand-bracket {
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
		position: relative;
	}

	.links a:hover {
		color: var(--text);
	}

	.links a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -4px;
		width: 0;
		height: 2px;
		background: var(--accent);
		transition: width 0.2s var(--ease);
	}

	.links a:hover::after {
		width: 100%;
	}

	.right {
		display: flex;
		align-items: center;
		gap: var(--space-4);
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

	.nav-cta {
		padding: 0.55rem 1.1rem;
		font-size: 0.88rem;
	}

	@media (max-width: 40rem) {
		.links {
			display: none;
		}
		.nav-cta {
			display: none;
		}
	}
</style>
