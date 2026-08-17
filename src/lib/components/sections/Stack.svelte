<script lang="ts">
	import type { I18n, TranslationKey } from '$lib/i18n/i18n.svelte';
	import { reveal } from '$lib/actions/reveal.svelte';

	let { i18n }: { i18n: I18n } = $props();

	// Ordered list of stack items grouped by category.
	// Key references the dictionary key at stack.items.<key>.
	const groups = $derived([
		{
			category: i18n.t('stack.categories.languages'),
			items: ['typescript', 'cpp', 'go', 'python'].map((k) => i18n.t(`stack.items.${k}` as TranslationKey))
		},
		{
			category: i18n.t('stack.categories.frontend'),
			items: ['svelte', 'htmlcss'].map((k) => i18n.t(`stack.items.${k}` as TranslationKey))
		},
		{
			category: i18n.t('stack.categories.backend'),
			items: ['node', 'sql', 'agentic'].map((k) => i18n.t(`stack.items.${k}` as TranslationKey))
		},
		{
			category: i18n.t('stack.categories.devops'),
			items: [
				'docker',
				'dockerCompose',
				'nginx',
				'kubernetes',
				'ciCd',
				'cloud',
				'linux',
				'gameServers'
			].map((k) => i18n.t(`stack.items.${k}` as TranslationKey))
		}
	]);
</script>

<section class="section container" id="stack" use:reveal>
	<div class="section-head">
		<span class="section-eyebrow">{i18n.t('stack.eyebrow')}</span>
		<h2 class="section-title">{i18n.t('stack.title')}</h2>
		<p class="section-subtitle">{i18n.t('stack.subtitle')}</p>
	</div>

	<div class="grid">
		{#each groups as group (group.category)}
			<div class="card">
				<h3 class="card-title">{group.category}</h3>
				<ul class="card-list">
					{#each group.items as item (item)}
						<li class="card-item">
							<span class="dot" aria-hidden="true"></span>
							{item}
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.grid {
		display: grid;
		gap: var(--space-6);
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}

	.card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-6);
		transition: border-color 0.2s ease, transform 0.2s var(--ease);
	}

	.card:hover {
		border-color: var(--accent);
		transform: translateY(-3px);
	}

	.card-title {
		font-size: 1rem;
		margin-bottom: var(--space-4);
		color: var(--accent-strong);
		font-weight: 600;
	}

	.card-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-2);
	}

	.card-item {
		display: flex;
		align-items: center;
		gap: var(--space-2);
		color: var(--text);
	}

	.dot {
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 999px;
		background: var(--accent);
		flex-shrink: 0;
	}
</style>
