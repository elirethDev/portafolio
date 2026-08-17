<script lang="ts">
	// Pablo's photo, served as an optimized WebP from /static.
	const photo = '/photo.webp';
</script>

<div class="avatar" title="Pablo Soler">
	<div class="avatar-inner">
		<img class="photo" src={photo} alt="Pablo Soler" width="798" height="800" loading="lazy" decoding="async" />
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
		background: var(--bg-card);
	}

	.photo {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
</style>
