<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import nodeLogo from '$lib/assets/node.svg';
	import Architecture from './Architecture.svelte';
	import CreateProject from './CreateProject.svelte';
</script>

<Slide topic="setup">
	<Slide>
		<Hero><h2>Setup your workspace</h2></Hero>
		<Description>We require Node.js as JavaScript runtime and any ide of your choice</Description>
		<img src={nodeLogo} alt="The Node.js logo" />
	</Slide>
	<CreateProject />
	<Architecture />
</Slide>

<style>
	img {
		margin: auto;
	}
</style>
