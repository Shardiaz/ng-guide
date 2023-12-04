<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';

	const branch = 'feature/ngrx';
</script>

<Slide>
	<Hero><h3>{$t('ngrx.use.title')}</h3></Hero>
	<Description>{$t('ngrx.use.description')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/collections/src/lib/routes.ts"
		lines="12-15"
		{branch}
	/>
</Slide>
