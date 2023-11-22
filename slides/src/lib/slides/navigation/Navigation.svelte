<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import GenerateNavigation from './GenerateNavigation.svelte';
	import NavigationConcepts from './NavigationConcepts.svelte';
	import UseNavigation from './UseNavigation.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('nav.title')}</h2></Hero>
		<Description>{$t('nav.description')}</Description>
		<div class="navigation">
			<div class="schema">
				<nav>
					<a href="#1">Link1</a>
					<a href="#2">Link1</a>
					<a href="#3">Link1</a>
				</nav>
			</div>
			<div class="schema">Router outlet</div>
		</div>
	</Slide>
	<NavigationConcepts />
	<GenerateNavigation />
	<UseNavigation/>
</Slide>

<style lang="scss" scoped>
	.navigation {
		padding: 2rem;
		display: grid;
		gap: 0.25rem;
		grid-template-rows: 1fr 2fr;
	}
</style>
