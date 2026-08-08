<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';
	import { reveal } from '$lib/actions/reveal.svelte';

	let { i18n }: { i18n: I18n } = $props();

	const githubUrl = 'https://github.com/elirethDev';
</script>

<section class="section container" id="projects" use:reveal>
	<div class="section-head">
		<span class="section-eyebrow">{i18n.t('projects.eyebrow')}</span>
		<h2 class="section-title">{i18n.t('projects.title')}</h2>
		<p class="section-subtitle">{i18n.t('projects.subtitle')}</p>
	</div>

	<article class="project-card">
		<div class="project-body">
			<span class="badge">
				<span class="badge-dot" aria-hidden="true"></span>
				{i18n.t('projects.forum.tag')}
			</span>
			<h3 class="project-name">{i18n.t('projects.forum.name')}</h3>
			<p class="muted project-desc">{i18n.t('projects.forum.description')}</p>
			<div class="project-tags">
				<span>TypeScript</span>
				<span>Node.js</span>
				<span>SQL</span>
				<span>Prod</span>
			</div>
			<div class="project-actions">
				<a class="btn btn-primary" href={githubUrl} target="_blank" rel="noopener noreferrer">
					{i18n.t('projects.viewCode')} →
				</a>
			</div>
		</div>
	</article>

	<p class="muted more">{i18n.t('projects.moreSoon')}</p>
</section>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		background: rgba(74, 222, 128, 0.1);
		color: var(--success);
		border: 1px solid rgba(74, 222, 128, 0.3);
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.3rem 0.9rem;
		border-radius: 999px;
		margin-bottom: var(--space-4);
	}

	.badge-dot {
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 999px;
		background: var(--success);
	}

	.project-card {
		background:
			var(--mesh),
			var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-xl);
		padding: clamp(var(--space-6), 5vw, var(--space-10));
		box-shadow: var(--shadow-md);
		max-width: 54rem;
		transition: border-color 0.25s ease, transform 0.25s var(--ease);
	}

	.project-card:hover {
		border-color: var(--border-strong);
		transform: translateY(-3px);
		box-shadow: var(--shadow-lg);
	}

	.project-name {
		font-size: clamp(1.4rem, 3vw, 1.75rem);
		margin-bottom: var(--space-3);
	}

	.project-desc {
		margin-bottom: var(--space-6);
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2);
		margin-bottom: var(--space-8);
	}

	.project-tags span {
		font-family: var(--font-mono);
		font-size: 0.8rem;
		color: var(--text-muted);
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		padding: 0.3rem 0.65rem;
	}

	.project-actions {
		display: flex;
		gap: var(--space-3);
	}

	.more {
		margin-top: var(--space-10);
	}
</style>
