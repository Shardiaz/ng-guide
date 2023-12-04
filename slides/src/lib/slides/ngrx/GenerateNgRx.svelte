<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';

	const branch = 'feature/ngrx';
</script>

<Slide>
	<Hero><h3>{$t('ngrx.generate.title')}</h3></Hero>
	<Description>{$t('ngrx.generate.description')}</Description>
	<Code external="code/generate-ngrx.elm" />
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.generate.actions.title')}</h3></Hero>
	<Description>{$t('ngrx.generate.actions.description')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/collections/src/lib/store/collections.actions.ts"
		{branch}
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.generate.effects.title')}</h3></Hero>
	<Description>{$t('ngrx.generate.effects.description')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/collections/src/lib/store/collections.effects.ts"
		{branch}
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.generate.feature.title')}</h3></Hero>
	<Description>{$t('ngrx.generate.feature.description')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/collections/src/lib/store/collections.feature.ts"
		lines="1-18,44-47"
		{branch}
	/>
</Slide>
