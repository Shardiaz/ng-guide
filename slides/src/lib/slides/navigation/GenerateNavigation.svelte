<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h2>{$t('nav.generate.title')}</h2></Hero>
	<Description>{$t('nav.generate.description')}</Description>
	<Code external="code/generate-nav.elm" />
</Slide>
<Slide>
	<Hero><h2>{$t('nav.generate.html.title')}</h2></Hero>
	<Description>{$t('nav.generate.html.description')}</Description>
	<CodeReference
		file="ng-16-workshop\src\app\navigation\navigation.component.html"
		versioned
		clipHighlight
	/>
</Slide>
<Slide>
	<Hero><h2>{$t('nav.generate.ts.title')}</h2></Hero>
	<Description>{$t('nav.generate.ts.description')}</Description>
	<CodeReference file="ng-16-workshop\src\app\navigation\navigation.component.ts" clipHighlight />
</Slide>
<Slide>
	<Hero><h2>{$t('nav.generate.css.title')}</h2></Hero>
	<Description>{$t('nav.generate.css.description')}</Description>
	<CodeReference file="ng-16-workshop\src\app\navigation\navigation.component.scss" clipHighlight />
</Slide>
