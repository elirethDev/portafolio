<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';

	let { i18n }: { i18n: I18n } = $props();

	const githubUrl = 'https://github.com/elirethDev';

	const snippet = `const soler = {
  role: 'Fullstack Dev',
  stack: ['TS', 'Go', 'Python'],
  build: 'server → screen',
  shipping: true
};`;
</script>

<section class="hero" id="top">
	<div class="mesh" aria-hidden="true"></div>

	<div class="container hero-inner">
		<div class="hero-copy">
			<span class="availability">
				<span class="pulse" aria-hidden="true"></span>
				<span>{i18n.t('hero.available')}</span>
			</span>

			<p class="greeting muted">{i18n.t('hero.greeting')}</p>
			<h1 class="name">{i18n.t('hero.name')}</h1>
			<p class="role">{i18n.t('hero.role')}</p>
			<p class="tagline">{i18n.t('hero.tagline')}</p>

			<div class="cta">
				<a class="btn btn-primary" href="#projects">{i18n.t('hero.ctaProjects')}</a>
				<a class="btn btn-ghost" href="#contact">{i18n.t('hero.ctaContact')}</a>
			</div>

			<div class="quick-links">
				<a
					class="btn-icon"
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="GitHub"
					title="GitHub"
				>
					<svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
						<path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
						/>
					</svg>
				</a>
				<a class="btn-icon" href="#contact" aria-label="Email" title="Email">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<rect width="20" height="16" x="2" y="4" rx="2"></rect>
						<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
					</svg>
				</a>
			</div>
		</div>

		<div class="hero-aside" aria-hidden="true">
			<div class="code-card">
				<div class="code-head">
					<span></span><span></span><span></span>
				</div>
				<pre class="code"><code>{snippet}</code></pre>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		min-height: 100svh;
		display: flex;
		align-items: center;
		position: relative;
		padding-block: var(--space-20) var(--space-8);
	}

	.mesh {
		position: absolute;
		inset: 0;
		background: var(--mesh);
		pointer-events: none;
		z-index: 0;
	}

	.hero-inner {
		position: relative;
		z-index: 1;
		display: grid;
		gap: var(--space-12);
		align-items: center;
	}

	.availability {
		display: inline-flex;
		align-items: center;
		gap: var(--space-2);
		background: rgba(74, 222, 128, 0.1);
		border: 1px solid rgba(74, 222, 128, 0.3);
		color: var(--success);
		font-size: 0.85rem;
		font-weight: 600;
		padding: 0.35rem 0.9rem;
		border-radius: 999px;
		margin-bottom: var(--space-6);
	}

	.pulse {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 999px;
		background: var(--success);
		position: relative;
	}

	.pulse::after {
		content: '';
		position: absolute;
		inset: -0.25rem;
		border-radius: 999px;
		border: 1px solid var(--success);
		animation: pulse 2s var(--ease) infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(0.8);
			opacity: 1;
		}
		100% {
			transform: scale(1.8);
			opacity: 0;
		}
	}

	.greeting {
		font-size: 1.05rem;
		margin-bottom: var(--space-2);
	}

	.name {
		font-size: clamp(2.5rem, 7vw, 4.5rem);
		letter-spacing: -0.03em;
	}

	.role {
		font-family: var(--font-mono);
		font-size: clamp(1.1rem, 2.5vw, 1.5rem);
		font-weight: 500;
		color: var(--accent-strong);
		margin-top: var(--space-2);
	}

	.tagline {
		max-width: 34rem;
		font-size: 1.1rem;
		color: var(--text);
		margin-top: var(--space-6);
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
		margin-top: var(--space-8);
	}

	.quick-links {
		display: flex;
		gap: var(--space-3);
		margin-top: var(--space-8);
	}

	.hero-aside {
		display: none;
		perspective: 1000px;
	}

	.code-card {
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		transform: rotateY(-6deg) rotateX(2deg);
		transition: transform 0.4s var(--ease);
	}

	.code-card:hover {
		transform: rotateY(0) rotateX(0);
	}

	.code-head {
		display: flex;
		gap: var(--space-2);
		padding: var(--space-3) var(--space-4);
		border-bottom: 1px solid var(--border);
	}

	.code-head span {
		width: 0.7rem;
		height: 0.7rem;
		border-radius: 999px;
	}

	.code-head span:nth-child(1) {
		background: #ff5f57;
	}
	.code-head span:nth-child(2) {
		background: #febc2e;
	}
	.code-head span:nth-child(3) {
		background: #28c840;
	}

	.code {
		padding: var(--space-6);
		font-family: var(--font-mono);
		font-size: 0.9rem;
		line-height: 1.7;
		color: var(--text);
	}

	@media (min-width: 48rem) {
		.hero-inner {
			grid-template-columns: 1.4fr 1fr;
		}
		.hero-aside {
			display: block;
		}
	}
</style>
