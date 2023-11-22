<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('nav.generate.title')}</h3></Hero>
	<Description>{$t('nav.generate.description')}</Description>
	<Code external="code/generate-nav.elm" />
</Slide>
<Slide>
	<Hero><h3>{$t('nav.generate.html.title')}</h3></Hero>
	<Description>{$t('nav.generate.html.description')}</Description>
	<CodeReference file="ng-16-workshop\src\app\navigation\navigation.component.html" />
</Slide>
<Slide>
	<Hero><h3>{$t('nav.generate.ts.title')}</h3></Hero>
	<Description>{$t('nav.generate.ts.description')}</Description>
	<CodeReference file="ng-16-workshop\src\app\navigation\navigation.component.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('nav.generate.css.title')}</h3></Hero>
	<Description>{$t('nav.generate.css.description')}</Description>
	<CodeReference file="ng-16-workshop\src\app\navigation\navigation.component.scss" />
</Slide>
