<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Stack from '$lib/components/sections/Stack.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import { getI18nContext } from '$lib/i18n/i18n.svelte';

	const i18n = getI18nContext();
</script>

<Hero {i18n} />
<About {i18n} />
<Stack {i18n} />
<Projects {i18n} />
<Contact {i18n} />
