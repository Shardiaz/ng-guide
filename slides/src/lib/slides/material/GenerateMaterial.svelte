<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('material.generate.title')}</h3></Hero>
	<Description>{$t('material.generate.description')}</Description>
	<Code language="elm">ng add @angular/material</Code>
</Slide>
<Slide>
	<Hero><h3>{$t('material.generate.palette.title')}</h3></Hero>
	<Description>{$t('material.generate.palette.description')}</Description>
	<CodeReference file="ng-17-workshop\src\style\colors\pallettes.scss" />
</Slide>
<Slide>
	<Hero><h3>{$t('material.generate.theme.title')}</h3></Hero>
	<Description>{$t('material.generate.theme.description')}</Description>
	<CodeReference file="ng-17-workshop\src\style\material.scss" />
</Slide>
