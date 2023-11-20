<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import nodeLogo from '$lib/assets/node.svg';
	import { t } from '$lib/i18n';
	import Architecture from './Architecture.svelte';
	import CreateProject from './CreateProject.svelte';
</script>

<Slide topic="environment">
	<Slide>
		<Hero><h2>{$t('setup.environment.title')}</h2></Hero>
		<Description>{$t('setup.environment.description')}</Description>
		<img class="center" src={nodeLogo} alt="The Node.js logo" />
	</Slide>
	<CreateProject />
	<Architecture />
</Slide>
