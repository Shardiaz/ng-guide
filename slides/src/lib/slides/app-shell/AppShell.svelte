<script lang="ts">
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import GenerateComponent from './GenerateComponent.svelte';
	import UseShell from './UseShell.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('shell.task.title')}</h2></Hero>
		<Description>{$t('shell.task.description')}</Description>
		<div class="r-stretch shell" />
	</Slide>
	<GenerateComponent />
	<UseShell />
</Slide>

<style lang="scss">
	.shell {
		--header: rgb(0, 162, 255);
		--content: rgb(0, 162, 255);
		padding: 1rem;
		display: grid;
		gap: 0.125rem;
		grid-template-rows: auto 1fr;
		padding-bottom: 4rem;
		&::before,
		&::after {
			--color: white;
			border-radius: 1rem;
			color: var(--color);
			border: 2px solid var(--color);
			box-shadow: inset 0px 0 10px 2px var(--color);
		}

		&::before {
			content: 'Header';
			--color: var(--header);
		}

		&::after {
			content: 'Content';
			--color: var(--content);
			display: grid;
			place-items: center;
		}
	}
</style>
