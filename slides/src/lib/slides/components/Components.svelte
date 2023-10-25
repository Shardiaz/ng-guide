<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import Children from './Children.svelte';
	import DependencyInjection from './DependencyInjection.svelte';
	import FirstComponent from './FirstComponent.svelte';
	import InputOutput from './InputOutput.svelte';
</script>

<Slide topic="components">
	<Slide>
		<Hero><h2>Components</h2></Hero>
		<Description>We can use the cli to generate components.</Description>
		<Code>npx ng g component</Code>
	</Slide>
	<FirstComponent />
	<InputOutput />
	<Children />
	<DependencyInjection />
</Slide>
