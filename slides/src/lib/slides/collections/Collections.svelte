<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import CollectionsConcepts from './CollectionsConcepts.svelte';
	import GenerateApi from './GenerateApi.svelte';
	import GenerateCollections from './GenerateCollections.svelte';
	import UseCollections from './UseCollections.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('collections.title')}</h2></Hero>
		<Description>{$t('collections.description')}</Description>
		<div class="schema gap-4 p-4 grid-flow-col">
			App
			<div class="schema light p-4">Feature1</div>
			<div class="schema light p-4">Feature2</div>
		</div>
	</Slide>
	<CollectionsConcepts />
	<GenerateApi />
	<GenerateCollections />
	<UseCollections />
</Slide>

<style lang="scss" scoped>
	.light {
		--schema: #5c42ee;
	}
</style>
