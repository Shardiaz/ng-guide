<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('collections.use.title')}</h3></Hero>
	<Description>{$t('collections.use.description')}</Description>
	<CodeReference file="ng-17-workshop\src\app\app.routes.ts" lines="21-26" />
</Slide>
