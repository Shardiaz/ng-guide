<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import GenerateMaterial from './GenerateMaterial.svelte';
	import UseMaterial from './UseMaterial.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('material.title')}</h2></Hero>
		<Description>{$t('material.description')}</Description>
		<img class="center" src="/preview-material.png" alt="Angular Material logo" />
	</Slide>
	<GenerateMaterial />
	<UseMaterial />
</Slide>
