<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';

	let { i18n }: { i18n: I18n } = $props();

	const email = 'pablosolerjs@gmail.com';
	const githubUrl = 'https://github.com/elirethDev';
</script>

<section class="section container" id="contact">
	<h2 class="section-title">{i18n.t('contact.title')}</h2>
	<p class="section-subtitle">{i18n.t('contact.subtitle')}</p>

	<div class="contact-links">
		<a class="contact-card" href={`mailto:${email}`}>
			<span class="contact-label muted">{i18n.t('contact.emailLabel')}</span>
			<span class="contact-value">{email}</span>
			<span class="contact-action">{i18n.t('contact.sendEmail')} →</span>
		</a>

		<a
			class="contact-card"
			href={githubUrl}
			target="_blank"
			rel="noopener noreferrer"
		>
			<span class="contact-label muted">{i18n.t('contact.githubLabel')}</span>
			<span class="contact-value">github.com/elirethDev</span>
			<span class="contact-action">{i18n.t('contact.openGithub')} →</span>
		</a>
	</div>
</section>

<style>
	.contact-links {
		display: grid;
		gap: var(--space-4);
		max-width: 40rem;
	}

	.contact-card {
		display: grid;
		gap: var(--space-1);
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-6);
		color: var(--text);
		transition: border-color 0.2s ease, transform 0.2s var(--ease);
	}

	.contact-card:hover {
		border-color: var(--accent);
		transform: translateY(-3px);
		color: var(--text);
	}

	.contact-label {
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.contact-value {
		font-size: 1.15rem;
		font-weight: 600;
		word-break: break-all;
	}

	.contact-action {
		color: var(--accent-strong);
		font-size: 0.9rem;
		margin-top: var(--space-2);
	}
</style>
