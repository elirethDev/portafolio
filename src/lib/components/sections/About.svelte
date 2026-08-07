<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';
	import Avatar from '../Avatar.svelte';

	let { i18n }: { i18n: I18n } = $props();
</script>

<section class="section container" id="about">
	<h2 class="section-title">{i18n.t('about.title')}</h2>

	<div class="about-grid">
		<div class="about-text">
			<p class="lead">{i18n.t('about.text')}</p>

			<div class="facts">
				<div class="fact">
					<h3 class="fact-title">{i18n.t('about.education')}</h3>
					<p class="muted">{i18n.t('about.educationText')}</p>
				</div>
				<div class="fact">
					<h3 class="fact-title">{i18n.t('about.languages')}</h3>
					<ul class="lang-list">
						<li>{i18n.t('about.langES')}</li>
						<li>{i18n.t('about.langEN')}</li>
					</ul>
				</div>
			</div>
		</div>

		<Avatar />
	</div>
</section>

<style>
	.about-grid {
		display: grid;
		gap: var(--space-12);
		align-items: start;
	}

	@media (min-width: 48rem) {
		.about-grid {
			grid-template-columns: 1.6fr 1fr;
		}
	}

	.lead {
		font-size: 1.1rem;
		margin-bottom: var(--space-8);
	}

	.facts {
		display: grid;
		gap: var(--space-6);
	}

	.fact-title {
		font-size: 0.95rem;
		color: var(--accent-strong);
		margin-bottom: var(--space-2);
		font-weight: 600;
		letter-spacing: 0;
	}

	.lang-list {
		margin: 0;
		padding-left: var(--space-4);
		color: var(--text-muted);
	}
</style>
