<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
</script>

<Slide>
	<Hero><h2>NgComponent</h2></Hero>
	<Description>
		This will create a component folder with all the component files. By default angular splits it
		in .ts, .css and .html files. You can inline these or generate them inlined as well.
	</Description>
</Slide>
<Slide>
	<Hero><h2>NgComponent</h2></Hero>
	<Description>
		The NgComponent decorator is the heart of the concept linking these files together in the
		<strong> shell.ts </strong>
	</Description>
	<Code language="ts" external="./code/shell.component.ts" lines animationId="ngcomponent" />
</Slide>
<Slide>
	<Hero><h2>NgComponent</h2></Hero>
	<Description>
		The selector defines the tag we can use to place the component in an Html context
	</Description>
	<Code
		language="ts"
		external="./code/shell.component.ts"
		externalStart={4}
		externalEnd={10}
		lines="2"
		animationId="ngcomponent"
	/>
	<Code external="./code/app.component.html" animationId="example" />
</Slide>
<Slide>
	<Hero><h2>NgComponent</h2></Hero>
	<Description>
		The standalone tag is present because we defined it in the angular json for the component
		schematic. It causes the Component to use the Siandalone api making it importable.
	</Description>
	<Code
		language="ts"
		external="./code/shell.component.ts"
		externalStart={4}
		externalEnd={10}
		lines="3"
		animationId="ngcomponent"
	/>
	<Code
		external="./code/app.component.ts"
		externalStart={4}
		externalEnd={9}
		lines="1,6"
		animationId="example"
	/>
</Slide>
<Slide>
	<Hero><h2>NgComponent</h2></Hero>
	<Description>Imports define the set of Injectables that the component uses.</Description>
	<Code
		language="ts"
		external="./code/shell.component.ts"
		externalStart={4}
		externalEnd={10}
		lines="4"
		animationId="ngcomponent"
	/>
</Slide>
<Slide>
	<Hero><h2>NgComponent</h2></Hero>
	<Description>
		TemplateUrl refers to the file or Template to inline the html markup of the component.
	</Description>
	<Code
		language="ts"
		external="./code/shell.component.ts"
		externalStart={4}
		externalEnd={10}
		lines="5"
		animationId="ngcomponent"
	/>
	<Code
		external="./code/inline-shell.component.ts"
		externalStart={5}
		externalEnd={14}
		animationId="example"
		lines="5-8"
	/>
</Slide>
<Slide>
	<Hero><h2>NgComponent</h2></Hero>
	<Description>StyleUrls and Styles follow alike, but as respective arrays</Description>
	<Code
		language="ts"
		external="./code/shell.component.ts"
		externalStart={4}
		externalEnd={10}
		lines="6"
		animationId="ngcomponent"
	/>
</Slide>
