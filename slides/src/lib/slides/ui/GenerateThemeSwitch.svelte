<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ui.generate.theme.title')}</h3></Hero>
	<Description>{$t('ui.generate.theme.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.theme.pipe.title')}</h3></Hero>
	<Description>{$t('ui.generate.theme.pipe.description')}</Description>
	<CodeReference file="ng-17-workshop/projects/ui/src/lib/theme-switch/themes.pipe.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.theme.html.title')}</h3></Hero>
	<Description>{$t('ui.generate.theme.html.description')}</Description>
	<CodeReference file="ng-17-workshop/projects/ui/src/lib/theme-switch/theme-switch.component.html" versioned />
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.theme.ts.title')}</h3></Hero>
	<Description>{$t('ui.generate.theme.ts.description')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/ui/src/lib/theme-switch/theme-switch.component.ts"
		clipHighlight
	/>
</Slide>
