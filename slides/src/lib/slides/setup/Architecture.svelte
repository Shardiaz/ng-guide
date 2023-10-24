<script>
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import Description from '$lib/Description.svelte';
	import Code from '$lib/Code.svelte';
</script>

<Slide>
	<Hero><h2>Modular design</h2></Hero>
	<Description>
		We use <span data-id="modules">modules</span> (legacy) and <span>libraries</span> to seperate independant
		code bases
	</Description>
</Slide>
<Slide>
	<Hero><h2 data-id="modules">Modules</h2></Hero>
	<Description>
		We can use NgModules to create a composition of elements, which is still the default.
	</Description>
	<Code language="ts" external="./code/hero.module.ts" lines />
</Slide>

<Slide>
	<Hero><h2 data-id="modules">Modules</h2></Hero>
	<Description>
		Meanwhile the Standalone api provides the same benefits with a simple per directive
		configuration.
	</Description>
	<Code language="ts" external="./code/hero.component.ts" lines="6" />
</Slide>

<Slide>
	<Hero><h2 data-id="modules">Typescript</h2></Hero>
	<Description>We use Typescript and strict typings</Description>
	<Code language="json" external="./code/tsconfig.json" lines="8" />
</Slide>

<Slide>
	<Hero><h2 data-id="modules">Typescript</h2></Hero>
	<Description>We use ESLint to enforce extended and more complex rule sets</Description>
	<Code language="coffescript">
		ng add @angular-eslint/schematics
	</Code>
</Slide>

