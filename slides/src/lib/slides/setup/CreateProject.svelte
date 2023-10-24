<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
</script>

<Slide>
	<Hero><h2>Using the CLI to scaffold</h2></Hero>
	<Description>Install the cli globally to have access to the <strong>ng</strong> command anywhere in your console</Description>
	<Code language="coffeescript" animationId="bash">
		npm i @angular/cli -g
	</Code>
</Slide>
<Slide>
	<Hero><h2>Using the CLI to scaffold</h2></Hero>
	<Description>Create a new workspace with the new standalone api</Description>
	<Code language="coffeescript" animationId="bash">
		npm i @angular/cli -g
		ng new angular-workshop --standalone
	</Code>
</Slide>
<Slide>
	<Hero><h2>Using the CLI to scaffold</h2></Hero>
	<Description>Alternatively</Description>
	<Code language="coffeescript" animationId="bash">
		npx @angular/cli new angular-workshop --standalone
	</Code>
</Slide>
<Slide>
	<Hero><h2>Using the CLI to scaffold</h2></Hero>
	<Description>Run the dev server</Description>
	<Code language="coffeescript" animationId="bash">
		npm i @angular/cli -g
		ng new angular-workshop --standalone
		cd angular-workshop
		npm run start
	</Code>
</Slide>
