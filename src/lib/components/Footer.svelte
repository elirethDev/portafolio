<script lang="ts">
	import type { I18n } from '$lib/i18n/i18n.svelte';

	let { i18n }: { i18n: I18n } = $props();
	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="container footer-inner">
		<p class="muted">
			© {year} Pablo Soler. {i18n.t('footer.rights')}
		</p>
		<p class="muted built">
			{i18n.t('footer.built')} <span class="accent">SvelteKit</span> + Cloudflare Pages
		</p>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--border);
		padding-block: var(--space-8);
	}

	.footer-inner {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
		align-items: center;
		justify-content: space-between;
		font-size: 0.9rem;
	}

	.built {
		display: inline-flex;
		gap: var(--space-1);
	}

	.accent {
		color: var(--accent-strong);
	}
</style>
