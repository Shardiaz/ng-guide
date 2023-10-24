<script>
	import Hero from "$lib/Hero.svelte";
import Slide from "$lib/Slide.svelte";
	import Children from "./Children.svelte";
	import DependencyInjection from "./DependencyInjection.svelte";
	import InputOutput from "./InputOutput.svelte";

</script>
<Slide>
	<Slide>
		<Hero><h2>Components</h2></Hero>
	</Slide>
	<InputOutput/>
	<Children/>
	<DependencyInjection/>
</Slide>