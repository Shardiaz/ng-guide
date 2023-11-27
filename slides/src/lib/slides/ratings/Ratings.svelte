<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import GenerateBrowser from './GenerateBrowser.svelte';
	import GenerateCollections from './GenerateRatings.svelte';
	import CollectionsConcepts from './RatingsConcepts.svelte';
	import UseCollections from './UseRatings.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('ratings.title')}</h2></Hero>
		<Description>{$t('ratings.description')}</Description>
		<div class="schema gap-4 p-4 grid-flow-col">
			App
			<div class="schema light p-4">Feature1</div>
			<div class="schema light p-4">Feature2</div>
		</div>
	</Slide>
	<CollectionsConcepts />
	<GenerateBrowser />
	<GenerateCollections />
	<UseCollections />
</Slide>

<style lang="scss" scoped>
	.light {
		--schema: #5c42ee;
	}
</style>
