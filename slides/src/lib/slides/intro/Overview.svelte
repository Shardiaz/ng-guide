<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('intro.overview.title')}</h3></Hero>
	<Description>{$t('intro.overview.description')}</Description>
	<img
		class="r-stretch center r-frame"
		src="app-preview.png"
		alt="Screenshot of the workshop app"
	/>
</Slide>
