<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
</script>

<Slide>
	<Hero><h2>Modular design</h2></Hero>
	<Description>
		We use <span>modules</span> (legacy) and <span>libraries</span> to seperate independant code bases
	</Description>
</Slide>
<Slide>
	<Hero><h2>Modules</h2></Hero>
	<Description>
		Meanwhile the Standalone api provides the same benefits with a simple per directive
		configuration.
	</Description>
	<CodeReference file="ng-16-workshop/src/app/app.component.ts" range={[4, 6]} />
</Slide>

<Slide>
	<Hero><h2>Typescript</h2></Hero>
	<Description>We use Typescript and strict typings</Description>
	<Code language="json" external="./code/tsconfig.json" lines="8" />
</Slide>

<Slide>
	<Hero><h2>Typescript</h2></Hero>
	<Description>We use ESLint to enforce extended and more complex rule sets</Description>
	<Code language="coffeescript" animationId="lint">npx ng add @angular-eslint/schematics</Code>
</Slide>
<Slide>
	<Hero><h2>Typescript</h2></Hero>
	<Description>We use ESLint to enforce extended and more complex rule sets</Description>
	<Code language="coffeescript" animationId="lint">
		npx ng add @angular-eslint/schematics npx ng lint
	</Code>
</Slide>
<Slide>
	<Hero><h2>Filesystem</h2></Hero>
	<Description>
		There are multiple concept to organize. Angular comes with a set of options that will be applyed
		by using the cli for code scaffolding. On the highest level we can organize in libraries and
		applications.
	</Description>
</Slide>
<Slide>
	<Hero><h2>Applications</h2></Hero>
	<Description>
		We can add an aditional Application to the workspace. You might also want to look at
		MicorFrontends in some use cases.
	</Description>
	<Code>npx ng g application playground --standalone</Code>
</Slide>
<Slide>
	<Hero><h2>Applications</h2></Hero>
	<Description>
		This will create a new folder in <strong>~root/projects/<em>playground</em></strong>. Configured
		to be fully buildable on its own. Which will be represented in the
		<strong>angular.json</strong>.
	</Description>
	<Code language="json" external="./code/new-app-angular.json" lines="8-122" />
</Slide>

<Slide>
	<Hero><h2>Libraries</h2></Hero>
	<Description>
		We can add libraries to be consumed throughout our worksapce or even distributed as npm package.
	</Description>
	<Code>npx ng g library ui --standalone</Code>
</Slide>
<Slide>
	<Hero><h2>Applications</h2></Hero>
	<Description>
		This will create a new folder in <strong>~root/projects/<em>ui</em></strong>. Configured to be
		fully buildable on its own. Which will be represented in the <strong>angular.json</strong> in the
		same fashion as the application.
	</Description>
	<Code language="json" external="./code/new-lib-angular.json" lines="10-52" />
</Slide>

<Slide>
	<Hero><h2>Modify the cli</h2></Hero>
	<Description
		>We can set our prefered settings for generation in the <strong>angular.json</strong> by adding the
		schematics key</Description
	>
	<Code language="json" lines="8-9">
		<script type="text/template">
{
	...
	"cli": {
		"schematicCollections": [
			"@angular-eslint/schematics"
		]
	}
	"schematics": {
	}
}
		</script>
	</Code>
</Slide>

<Slide>
	<Hero><h2>Modify the cli</h2></Hero>
	<Description>
		From here we can use any schematic name and assign the respective values (don't worry
		intellisense is provided). We set the defaults we like for generating components.
	</Description>
	<Code language="json" lines="9-12">
		<script type="text/template">
{
	...
	"cli": {
		"schematicCollections": [
			"@angular-eslint/schematics"
		]
	}
	"schematics": {
		"@schematics/angular:component": {
			"standalone": true,
			"style": "scss",
			"displayBlock": true
		}
	}
}
		</script>
	</Code>
</Slide>

<Slide>
	<Hero><h2>Modify the cli</h2></Hero>
	<Description>And follow up for any other schematic as we see fit going forward</Description>
	<Code language="json" lines="14-18">
		<script type="text/template">
{
	...
	"cli": {
		"schematicCollections": [
			"@angular-eslint/schematics"
		]
	}
	"schematics": {
		"@schematics/angular:component": {
			"standalone": true,
			"style": "scss",
			"displayBlock": true
		},
		"@schematics/angular:pipe": {
			"standalone": true
		},
		"@schematics/angular:library": {
			"standalone": true
		}
	}
}
		</script>
	</Code>
</Slide>
