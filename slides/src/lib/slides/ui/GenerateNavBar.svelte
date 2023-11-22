<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ui.generate.nav-bar.title')}</h3></Hero>
	<Description>{$t('ui.generate.nav-bar.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.nav-bar.html.title')}</h3></Hero>
	<Description>{$t('ui.generate.nav-bar.html.description')}</Description>
	<CodeReference file="ng-17-workshop/projects/ui/src/lib/nav-bar/nav-bar.component.html" />
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.nav-bar.ts.title')}</h3></Hero>
	<Description>{$t('ui.generate.nav-bar.ts.description')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/ui/src/lib/nav-bar/nav-bar.component.ts"
		clipHighlight
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.nav-bar.css.title')}</h3></Hero>
	<Description>{$t('ui.generate.nav-bar.css.description')}</Description>
	<CodeReference
		file="ng-17-workshop/projects/ui/src/lib/nav-bar/nav-bar.component.scss"
		clipHighlight
	/>
</Slide>
