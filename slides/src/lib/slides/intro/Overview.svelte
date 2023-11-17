<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h2>{$t('overview.title')}</h2></Hero>
	<Description>{$t('overview.description')}</Description>
</Slide>
