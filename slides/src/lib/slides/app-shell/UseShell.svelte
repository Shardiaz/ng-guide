<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h2>{$t('shell.use.title')}</h2></Hero>
	<Description>{$t('shell.use.description')}</Description>
	<CodeReference file="ng-17-workshop\src\app\app.component.ts" lines="8-9" />
</Slide>
