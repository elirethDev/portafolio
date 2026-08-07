<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';

	let { i18n }: { i18n: I18n } = $props();

	const email = 'pablosolerjs@gmail.com';
	const githubUrl = 'https://github.com/elirethDev';
</script>

<section class="section container" id="contact">
	<div class="section-head">
		<span class="section-eyebrow">{i18n.t('contact.eyebrow')}</span>
		<h2 class="section-title">{i18n.t('contact.title')}</h2>
		<p class="section-subtitle">{i18n.t('contact.subtitle')}</p>
	</div>

	<div class="contact-links">
		<a class="contact-card" href={`mailto:${email}`}>
			<div class="contact-top">
				<span class="contact-label">{i18n.t('contact.emailLabel')}</span>
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
			</div>
			<span class="contact-value">{email}</span>
			<span class="contact-action">{i18n.t('contact.sendEmail')} →</span>
		</a>

		<a
			class="contact-card"
			href={githubUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="contact-top">
				<span class="contact-label">{i18n.t('contact.githubLabel')}</span>
				<svg
					width="20"
					height="20"
					viewBox="0 0 16 16"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
					/>
				</svg>
			</div>
			<span class="contact-value">github.com/elirethDev</span>
			<span class="contact-action">{i18n.t('contact.openGithub')} →</span>
		</a>
	</div>
</section>

<style>
	.contact-links {
		display: grid;
		gap: var(--space-6);
		max-width: 42rem;
	}

	@media (min-width: 40rem) {
		.contact-links {
			grid-template-columns: 1fr 1fr;
		}
	}

	.contact-card {
		display: grid;
		gap: var(--space-2);
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-6);
		color: var(--text);
		transition: border-color 0.2s ease, transform 0.2s var(--ease), box-shadow 0.2s ease;
	}

	.contact-card:hover {
		border-color: var(--accent);
		transform: translateY(-3px);
		box-shadow: var(--shadow-md);
		color: var(--text);
	}

	.contact-top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: var(--text-faint);
	}

	.contact-label {
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.contact-value {
		font-size: 1.05rem;
		font-weight: 600;
		word-break: break-all;
	}

	.contact-action {
		color: var(--accent-strong);
		font-size: 0.9rem;
		margin-top: var(--space-2);
	}
</style>
