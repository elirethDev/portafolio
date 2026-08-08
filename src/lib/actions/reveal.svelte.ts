type RevealOptions = {
	delay?: number;
	once?: boolean;
};

/**
 * Scroll-reveal action.
 *
 * Starts elements invisible and fades/slides them in as they enter the
 * viewport. Respects `prefers-reduced-motion` (element stays visible and
 * static), which keeps the animation accessible.
 */
export function reveal(node: HTMLElement, opts: RevealOptions = {}) {
	const { delay = 0, once = true } = opts;

	if (import.meta.env.SSR) return;

	const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (reduced || !('IntersectionObserver' in window)) {
		node.style.opacity = '1';
		node.style.transform = 'none';
		return;
	}

	node.style.opacity = '0';
	node.style.transform = 'translateY(16px)';
	node.style.transition = 'opacity 0.6s var(--ease), transform 0.6s var(--ease)';
	node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'none';
					if (once) observer.disconnect();
				} else if (!once) {
					node.style.opacity = '0';
					node.style.transform = 'translateY(16px)';
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
	);

	observer.observe(node);

	return {
		update(newOpts: RevealOptions) {
			if (typeof newOpts.delay === 'number') {
				node.style.transitionDelay = `${newOpts.delay}ms`;
			}
		},
		destroy() {
			observer.disconnect();
		}
	};
}