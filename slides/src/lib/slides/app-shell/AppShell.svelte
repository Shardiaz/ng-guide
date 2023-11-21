<script lang="ts">
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import GenerateComponent from './GenerateComponent.svelte';
	import ShellConcepts from './ShellConcepts.svelte';
	import UseShell from './UseShell.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('shell.task.title')}</h2></Hero>
		<Description>{$t('shell.task.description')}</Description>
		<div class="r-stretch shell">
			<div class="schema">Header</div>
			<div class="schema">Content</div>
		</div>
	</Slide>
	<ShellConcepts />
	<GenerateComponent />
	<UseShell />
</Slide>

<style lang="scss">
	.shell {
		padding: 1rem;
		display: grid;
		gap: 0.125rem;
		grid-template-rows: auto 1fr;
		padding-bottom: 4rem;
	}
</style>
