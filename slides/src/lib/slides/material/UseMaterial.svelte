<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';

	const branch = 'feature/material';
</script>

<Slide>
	<Hero><h3>{$t('material.use.title')}</h3></Hero>
	<Description>{$t('material.use.description')}</Description>
	<CodeReference {branch} file="ng-17-workshop\src\styles.scss" lines="4" />
</Slide>
