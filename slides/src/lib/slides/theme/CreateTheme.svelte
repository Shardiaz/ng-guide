<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('theme.concept.title')}</h3></Hero>
	<Description>{$t('theme.concept.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('theme.elements')}</h3></Hero>
	<CodeReference file="ng-17-workshop\src\style\elements\input.scss" />
</Slide>
<Slide>
	<Hero><h3>{$t('theme.colors')}</h3></Hero>
	<CodeReference file="ng-17-workshop\src\style\colors\purple.scss" />
</Slide>
<Slide>
	<Hero><h3>{$t('theme.fonts')}</h3></Hero>
	<CodeReference file="ng-17-workshop\src\style\font.scss" />
</Slide>
<Slide>
	<Hero><h3>{$t('theme.compilation')}</h3></Hero>
	<CodeReference file="ng-17-workshop\src\style\theme.scss" />
</Slide>
<Slide>
	<Hero><h3>{$t('theme.utils')}</h3></Hero>
	<CodeReference file="ng-17-workshop/src/style/utils.scss" />
</Slide>
<Slide>
	<Hero><h3>{$t('theme.import')}</h3></Hero>
	<CodeReference file="ng-17-workshop/src/styles.scss" />
</Slide>
