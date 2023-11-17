<script>
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import angularLogo from '$lib/assets/ng-shield.svg';
	import { t } from '$lib/i18n';
	import Overview from './Overview.svelte';
	import Speaker from './Speaker.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('title')}</h2></Hero>
		<img class="r-stretch" src={angularLogo} alt="Angular Logo" />
	</Slide>
	<Speaker />
	<Overview />
</Slide>

<style>
	img {
		margin: auto;
	}
</style>
