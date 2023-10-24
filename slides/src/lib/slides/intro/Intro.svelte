<script>
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import angularLogo from '$lib/assets/ng-shield.svg';
	import Overview from './Overview.svelte';
	import Speaker from './Speaker.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>Guide to Angular</h2></Hero>
		<img class="r-stretch" src={angularLogo} alt="Angular Logo" />
	</Slide>
	<Speaker/>
	<Overview/>
</Slide>

<style>
	img {
		margin: auto;
	}
</style>
