<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h2>{$t('setup.architecture.layout')}</h2></Hero>
	<Description>{$t('setup.architecture.layout-description')}</Description>
	<img class="r-stretch center r-frame" src="workspace.png" alt="Screenshot of the workshop app" />
</Slide>

<Slide>
	<Hero><h2>{$t('setup.architecture.execute')}</h2></Hero>
	<Description>{$t('setup.architecture.execute-description')}</Description>
	<Code external="code/run.elm" />
</Slide>
