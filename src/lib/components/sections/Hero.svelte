<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';

	let { i18n }: { i18n: I18n } = $props();
</script>

<section class="hero container" id="top">
	<div class="hero-inner">
		<p class="greeting muted">{i18n.t('hero.greeting')}</p>
		<h1 class="name">
			{i18n.t('hero.name')}
			<span class="accent">.</span>
		</h1>
		<p class="role">{i18n.t('hero.role')}</p>
		<p class="tagline">{i18n.t('hero.tagline')}</p>

		<div class="cta">
			<a class="btn btn-primary" href="#projects">{i18n.t('hero.ctaProjects')}</a>
			<a class="btn btn-ghost" href="#contact">{i18n.t('hero.ctaContact')}</a>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding-block: var(--space-20) var(--space-8);
	}

	.greeting {
		font-size: 1.1rem;
		margin-bottom: var(--space-2);
	}

	.name {
		font-size: clamp(2.75rem, 8vw, 5rem);
	}

	.accent {
		color: var(--accent);
	}

	.role {
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		font-weight: 600;
		color: var(--text-muted);
		margin-top: var(--space-2);
	}

	.tagline {
		max-width: 34rem;
		font-size: 1.15rem;
		color: var(--text);
		margin-top: var(--space-6);
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
		margin-top: var(--space-8);
	}
</style>
