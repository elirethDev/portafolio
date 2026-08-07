<script lang="ts">
	// Placeholder avatar. Replace `photo` with `/photo.webp` (static/photo.webp)
	// when Pablo provides his picture. Keeps a clean fallback meanwhile.
</script>

<div class="avatar" title="Pablo Soler">
	<div class="avatar-photo"></div>
</div>

<style>
	.avatar {
		position: relative;
		width: min(100%, 18rem);
		aspect-ratio: 1 / 1;
		border-radius: var(--radius-lg);
		overflow: hidden;
		background:
			linear-gradient(135deg, rgba(108, 140, 255, 0.15), rgba(108, 140, 255, 0.04)),
			var(--bg-card);
		border: 1px solid var(--border);
		box-shadow: var(--shadow-md);
		justify-self: center;
	}

	.avatar-photo {
		width: 100%;
		height: 100%;
		/* Replace with: background-image: url('/photo.webp'); background-size: cover; background-position: center; */
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--accent);
		font-size: 4rem;
		font-weight: 800;
	}

	.avatar-photo::after {
		content: 'PS';
	}
</style>
