<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('ngrx.title')}</h2></Hero>
		<Description>{$t('ngrx.description')}</Description>
		<img class="center r-stretch" src="/ngrx.svg" alt="NgRx logo" />
	</Slide>
</Slide>
