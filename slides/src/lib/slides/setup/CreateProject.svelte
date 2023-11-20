<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h2>{$t('setup.create.title')}</h2></Hero>
	<Description>{$t('setup.create.description')}</Description>
	<Code external="/code/workspace.elm" />
</Slide>
