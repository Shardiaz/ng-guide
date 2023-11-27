<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ratings.generate.browser.title')}</h3></Hero>
	<Description>{$t('ratings.generate.browser.description')}</Description>
	<Code language="elm">ng g component item-browser --standalone --project=ui</Code>
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.browser.directive.title')}</h3></Hero>
	<Description>{$t('ratings.generate.browser.directive.description')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/ui/src/lib/item-browser/item-template.directive.ts"
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.browser.directive.title')}</h3></Hero>
	<Description>{$t('ratings.generate.browser.directive.description')}</Description>
	<CodeReference
		lines={{ 16: '5,10', 17: '4,9' }}
		file="ng-17-workshop/projects/ui/src/lib/item-browser/detail-template.directive.ts"
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.browser.html.title')}</h3></Hero>
	<Description>{$t('ratings.generate.browser.html.description')}</Description>
	<CodeReference
		file="ng-16-workshop/projects/ui/src/lib/item-browser/item-browser.component.html"
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.browser.ts.title')}</h3></Hero>
	<Description>{$t('ratings.generate.browser.ts.description')}</Description>
	<CodeReference file="ng-16-workshop/projects/ui/src/lib/item-browser/item-browser.component.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.browser.css.title')}</h3></Hero>
	<CodeReference
		file="ng-16-workshop/projects/ui/src/lib/item-browser/item-browser.component.scss"
	/>
</Slide>
