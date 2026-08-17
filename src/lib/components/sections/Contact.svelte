<script lang="ts">
	import { onMount } from 'svelte';
	import type { I18n } from '$lib/i18n/i18n.svelte';
	import { reveal } from '$lib/actions/reveal.svelte';

	let { i18n }: { i18n: I18n } = $props();

	const githubUrl = 'https://github.com/elirethDev';

	// Public Turnstile Site Key — designed to be exposed in the client.
	const TURNSTILE_SITE_KEY = '0x4AAAAAAEKVF5UxwUVve8xx';

	let name = $state('');
	let senderEmail = $state('');
	let message = $state('');
	let website = $state(''); // honeypot field: bots fill it, humans don't see it
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

	let turnstileToken = $state('');
	let turnstileLoaded = $state(false);
	let widgetId: number | undefined = $state();

	function loadTurnstile(): Promise<void> {
		return new Promise((resolve) => {
			if (window.turnstile) {
				turnstileLoaded = true;
				resolve();
				return;
			}
			const check = () => {
				if (window.turnstile) {
					turnstileLoaded = true;
					resolve();
				} else {
					setTimeout(check, 300);
				}
			};
			setTimeout(check, 200);
		});
	}

	// Kick off the loader once the component mounts (client only).
	// Without this, the widget would never render and the form would always fail.
	onMount(loadTurnstile);

	$effect(() => {
		if (turnstileLoaded && !widgetId) {
			const el = document.getElementById('turnstile-widget');
			if (el && window.turnstile) {
				widgetId = window.turnstile.render(el, {
					sitekey: TURNSTILE_SITE_KEY,
					callback: (token: string) => {
						turnstileToken = token;
					},
					'expired-callback': () => {
						turnstileToken = '';
						if (typeof widgetId === 'number') {
							window.turnstile?.reset(widgetId);
						}
					},
					'error-callback': () => {
						turnstileToken = '';
					}
				});
			}
		}
	});

	$effect(() => {
		if (status === 'success' && widgetId !== undefined && window.turnstile) {
			turnstileToken = '';
			window.turnstile.reset(widgetId);
		}
	});

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'sending') return;

		if (!turnstileToken) {
			status = 'error';
			return;
		}

		const data = new FormData();
		data.set('name', name);
		data.set('email', senderEmail);
		data.set('message', message);
		data.set('website', website);
		data.set('cf-turnstile-response', turnstileToken);

		status = 'sending';
		try {
			const res = await fetch('/api/contact', { method: 'POST', body: data });
			status = res.ok ? 'success' : 'error';
			if (res.ok) {
				name = senderEmail = message = '';
			}
		} catch {
			status = 'error';
		}
	}
</script>

<section class="section container" id="contact" use:reveal>
	<div class="section-head">
		<span class="section-eyebrow">{i18n.t('contact.eyebrow')}</span>
		<h2 class="section-title">{i18n.t('contact.title')}</h2>
		<p class="section-subtitle">{i18n.t('contact.subtitle')}</p>
	</div>

	<div class="contact-grid">
		<form class="contact-form" onsubmit={handleSubmit} novalidate>
			{#if status === 'success'}
				<p class="form-note success" role="status">{i18n.t('contact.success')}</p>
			{:else if status === 'error'}
				<p class="form-note error" role="alert">{i18n.t('contact.error')}</p>
			{/if}

			<div class="field">
				<label for="contact-name">{i18n.t('contact.nameLabel')}</label>
				<input
					id="contact-name"
					type="text"
					name="name"
					autocomplete="name"
					placeholder={i18n.t('contact.namePlaceholder')}
					bind:value={name}
					required
				/>
			</div>

			<div class="field">
				<label for="contact-email">{i18n.t('contact.emailLabel')}</label>
				<input
					id="contact-email"
					type="email"
					name="email"
					autocomplete="email"
					placeholder={i18n.t('contact.emailPlaceholder')}
					bind:value={senderEmail}
					required
				/>
			</div>

			<div class="field">
				<label for="contact-message">{i18n.t('contact.messageLabel')}</label>
				<textarea
					id="contact-message"
					name="message"
					rows="5"
					placeholder={i18n.t('contact.messagePlaceholder')}
					bind:value={message}
					required
				></textarea>
			</div>

			<!-- Honeypot: hidden from humans, bots auto-fill and get silently discarded -->
			<div class="hp-field" aria-hidden="true">
				<label for="contact-website">Website</label>
				<input id="contact-website" type="text" name="website" tabindex="-1" autocomplete="off" bind:value={website} />
			</div>

			<!-- Cloudflare Turnstile: proves a human is submitting (anti-bot) -->
			<div id="turnstile-widget" class="turnstile-wrap"></div>

			<button class="btn btn-primary btn-submit" type="submit" disabled={status === 'sending'}>
				{status === 'sending' ? i18n.t('contact.sending') : i18n.t('contact.send')}
			</button>

			<p class="form-required">{i18n.t('contact.required')}</p>
		</form>

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
	.contact-grid {
		display: grid;
		gap: var(--space-6);
		max-width: 42rem;
	}

	@media (min-width: 40rem) {
		.contact-grid {
			grid-template-columns: 1.6fr 1fr;
			align-items: start;
		}
	}

	.contact-form {
		display: grid;
		gap: var(--space-4);
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		padding: var(--space-6);
	}

	.field {
		display: grid;
		gap: var(--space-2);
	}

	.field label {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-faint);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.field input,
	.field textarea {
		width: 100%;
		background: var(--bg-elevated);
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		color: var(--text);
		padding: 0.7rem 0.9rem;
		font: inherit;
		transition: border-color 0.2s ease, box-shadow 0.2s ease;
	}

	.field textarea {
		resize: vertical;
		min-height: 8rem;
	}

	.field input:focus,
	.field textarea:focus {
		outline: none;
		border-color: var(--accent);
		box-shadow: 0 0 0 3px var(--accent-tint);
	}

	.btn-submit {
		justify-self: start;
		margin-top: var(--space-2);
	}

	.btn-submit:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.form-note {
		font-size: 0.95rem;
		padding: var(--space-3) var(--space-4);
		border-radius: var(--radius-md);
	}

	.form-note.success {
		background: rgba(74, 222, 128, 0.1);
		border: 1px solid rgba(74, 222, 128, 0.3);
		color: var(--success);
	}

	.form-note.error {
		background: rgba(248, 113, 113, 0.1);
		border: 1px solid rgba(248, 113, 113, 0.3);
		color: var(--danger);
	}

	.form-required {
		font-size: 0.8rem;
		color: var(--text-faint);
		margin: 0;
	}

	.turnstile-wrap {
		min-height: 65px;
	}

	/* Honeypot: rendered off-screen, invisible to humans */
	.hp-field {
		position: absolute;
		left: -9999px;
		top: -9999px;
		height: 0;
		opacity: 0;
		overflow: hidden;
		pointer-events: none;
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
