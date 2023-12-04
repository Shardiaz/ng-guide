<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import GenerateNgRx from './GenerateNgRx.svelte';
	import NgRxConcepts from './NgRxConcepts.svelte';
	import UseNgrx from './UseNgrx.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('ngrx.title')}</h2></Hero>
		<Description>{$t('ngrx.description')}</Description>
		<img class="center r-stretch" src="/ngrx.svg" alt="NgRx logo" />
	</Slide>
	<NgRxConcepts />
	<GenerateNgRx />
	<UseNgrx />
</Slide>
