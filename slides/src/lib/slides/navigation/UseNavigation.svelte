<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('nav.use.title')}</h3></Hero>
	<Description>{$t('nav.use.description')}</Description>
	<CodeReference
		file="ng-17-workshop\src\app\shell\shell.component.html"
		lines="1-11,14-17"
		clipHighlight
	/>
</Slide>
