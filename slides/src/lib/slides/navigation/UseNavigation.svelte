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
		lines={{ 17: '1-11,14-17', 16: '1-9,12-15' }}
		clipHighlight
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('nav.use.title')}</h3></Hero>
	<Description>{$t('nav.use.routes')}</Description>
	<CodeReference file="ng-17-workshop\src\app\app.routes.ts" clipHighlight lines="1-20,32-36" />
</Slide>
