<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('unit-test.generate.title')}</h3></Hero>
	<Description>{$t('unit-test.generate.description')}</Description>
	<Code external="code/generate-unit-test.elm" />
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.generate.theme-switch.title')}</h3></Hero>
	<Description>{$t('unit-test.generate.theme-switch.description')}</Description>
	<CodeReference
		file="ng-16-workshop/projects/ui/src/lib/theme-switch/theme-switch.component.spec.ts"
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.generate.mock.title')}</h3></Hero>
	<Description>{$t('unit-test.generate.mock.description')}</Description>
	<CodeReference file="ng-16-workshop/projects/ratings/src/lib/test/ratings.service.mock.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.generate.mock.title')}</h3></Hero>
	<CodeReference file="ng-16-workshop/projects/ratings/src/lib/test/collection.service.mock.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.generate.ratings.title')}</h3></Hero>
	<Description>{$t('unit-test.generate.ratings.description')}</Description>
	<CodeReference file="ng-16-workshop/projects/ratings/src/lib/ratings/ratings.component.spec.ts" />
</Slide>
