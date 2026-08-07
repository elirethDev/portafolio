<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';

	let { i18n }: { i18n: I18n } = $props();

	const githubUrl = 'https://github.com/elirethDev';
</script>

<section class="section container" id="projects">
	<h2 class="section-title">{i18n.t('projects.title')}</h2>
	<p class="section-subtitle">{i18n.t('projects.subtitle')}</p>

	<article class="project-card">
		<div class="project-body">
			<span class="badge">{i18n.t('projects.forum.tag')}</span>
			<h3 class="project-name">{i18n.t('projects.forum.name')}</h3>
			<p class="muted project-desc">{i18n.t('projects.forum.description')}</p>
			<div class="project-tags">
				<span>TypeScript</span>
				<span>Node.js</span>
				<span>SQL</span>
			</div>
			<a class="btn btn-ghost" href={githubUrl} target="_blank" rel="noopener noreferrer">
				{i18n.t('projects.viewCode')} →
			</a>
		</div>
	</article>

	<p class="muted more">{i18n.t('projects.moreSoon')}</p>
</section>

<style>
	.badge {
		display: inline-block;
		background: rgba(74, 222, 128, 0.12);
		color: var(--success);
		border: 1px solid rgba(74, 222, 128, 0.3);
		font-size: 0.78rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
		margin-bottom: var(--space-4);
	}

	.project-card {
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-8);
		box-shadow: var(--shadow-md);
		max-width: 52rem;
		transition: border-color 0.2s ease, transform 0.2s var(--ease);
	}

	.project-card:hover {
		border-color: var(--accent);
		transform: translateY(-3px);
	}

	.project-name {
		font-size: 1.5rem;
		margin-bottom: var(--space-2);
	}

	.project-desc {
		margin-bottom: var(--space-6);
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-bottom: var(--space-6);
	}

	.project-tags span {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-muted);
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		padding: 0.25rem 0.6rem;
	}

	.more {
		margin-top: var(--space-8);
	}
</style>
