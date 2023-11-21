<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h2>{$t('shell.generate.title')}</h2></Hero>
	<Description>{$t('shell.generate.description')}</Description>
	<Code language="elm">ng generate component shell --standalone</Code>
	<img
		class="center r-frame"
		src="explorer-shell.png"
		alt="File explorer shwoing shell component's files"
	/>
</Slide>
<Slide>
	<Hero><h2>{$t('shell.generate.html.title')}</h2></Hero>
	<Description>{$t('shell.generate.html.description')}</Description>
	<CodeReference
		file="ng-17-workshop\src\app\shell\shell.component.html"
		lines={{ 16: '1-4,12,13,15', 17: '1-6,14,15,17' }}
		versioned
		clipHighlight
	/>
</Slide>
<Slide>
	<Hero><h2>{$t('shell.generate.ts.title')}</h2></Hero>
	<Description>{$t('shell.generate.ts.description')}</Description>
	<CodeReference
		file="ng-17-workshop\src\app\shell\shell.component.ts"
		lines="1,2,10-14,19-24,52"
		clipHighlight
	/>
</Slide>
<Slide>
	<Hero><h2>{$t('shell.generate.css.title')}</h2></Hero>
	<Description>{$t('shell.generate.css.description')}</Description>
	<CodeReference
		file="ng-17-workshop\src\app\shell\shell.component.scss"
		lines="1-18,44-47"
		clipHighlight
	/>
</Slide>
