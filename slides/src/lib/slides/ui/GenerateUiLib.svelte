<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import GenerateCard from './GenerateCard.svelte';
	import GenerateNavBar from './GenerateNavBar.svelte';
	import GenerateThemeSwitch from './GenerateThemeSwitch.svelte';
</script>

<Slide>
	<Hero><h3>{$t('ui.generate.title')}</h3></Hero>
	<Description>{$t('ui.generate.description')}</Description>
	<Code language="elm">ng generate library ui --standalone --prefix=ui</Code>
	<img
		class="center r-frame"
		src="explorer-ui.png"
		alt="File explorer shwoing ui librarie's files"
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.components.title')}</h3></Hero>
	<Description>{$t('ui.generate.components.description')}</Description>
	<Code external="code/lib-components.elm" />
</Slide>
<GenerateCard />
<GenerateNavBar />
<GenerateThemeSwitch />
<Slide>
	<Hero><h3>{$t('ui.generate.components.title')}</h3></Hero>
	<Description>{$t('ui.generate.components.api')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/ui/src/public-api.ts"
		lines="1-5,9-11"
		clipHighlight
	/>
</Slide>
