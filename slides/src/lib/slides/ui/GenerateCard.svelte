<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ui.generate.card.title')}</h3></Hero>
	<Description>{$t('ui.generate.card.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.card.html.title')}</h3></Hero>
	<Description>{$t('ui.generate.card.html.description')}</Description>
	<CodeReference file="ng-17-workshop/projects/ui/src/lib/card/card.component.html" />
</Slide>
<Slide>
	<Hero><h3>{$t('ui.generate.card.css.title')}</h3></Hero>
	<Description>{$t('ui.generate.card.css.description')}</Description>
	<CodeReference file="ng-17-workshop/projects/ui/src/lib/card/card.component.scss" />
</Slide>
