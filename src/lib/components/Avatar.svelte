<script lang="ts">
	// Placeholder avatar. Replace `photo` with `/photo.webp` (static/photo.webp)
	// when Pablo provides his picture. Keeps a clean fallback meanwhile.
</script>

<div class="avatar" title="Pablo Soler">
	<div class="avatar-inner">
		<span class="monogram">PS</span>
	</div>
</div>

<style>
	.avatar {
		position: relative;
		width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: var(--radius-xl);
		padding: 2px;
		background: var(--gradient-accent);
		box-shadow: var(--shadow-lg);
	}

	.avatar::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: var(--radius-xl);
		box-shadow: 0 0 60px rgba(109, 139, 255, 0.25);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.avatar:hover::after {
		opacity: 1;
	}

	.avatar-inner {
		width: 100%;
		height: 100%;
		border-radius: calc(var(--radius-xl) - 2px);
		overflow: hidden;
		background:
			linear-gradient(160deg, rgba(109, 139, 255, 0.12), rgba(10, 14, 26, 0.6)),
			var(--bg-card);
		display: flex;
		align-items: center;
		justify-content: center;
		/* photo: background-image: url('/photo.webp'); background-size: cover; background-position: center; */
	}

	.monogram {
		font-family: var(--font-mono);
		font-size: clamp(3rem, 10vw, 4.5rem);
		font-weight: 800;
		background: var(--gradient-accent);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
