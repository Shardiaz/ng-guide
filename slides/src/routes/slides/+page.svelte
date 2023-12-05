<script lang="ts">
	import EmbedCode from '$lib/plugins/embed-code/embed-code';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/blood.css';
	import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
	import RevealNotes from 'reveal.js/plugin/notes/notes';

	import { t } from '$lib/i18n';
	import AppShell from '$lib/slides/app-shell/AppShell.svelte';
	import Collections from '$lib/slides/collections/Collections.svelte';
	import Intro from '$lib/slides/intro/Intro.svelte';
	import Material from '$lib/slides/material/Material.svelte';
	import Navigation from '$lib/slides/navigation/Navigation.svelte';
	import NgRx from '$lib/slides/ngrx/NgRx.svelte';
	import Ratings from '$lib/slides/ratings/Ratings.svelte';
	import Environment from '$lib/slides/setup/Environment.svelte';
	import Theme from '$lib/slides/theme/Theme.svelte';
	import UiLibrary from '$lib/slides/ui/UiLibrary.svelte';
	import UnitTest from '$lib/slides/unit-test/UnitTest.svelte';
	import { material, ngrx, unitTest } from '$lib/stores/features.store';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let loading = true;

	onMount(async () => {
		await Reveal.initialize({
			embedded: false,
			autoAnimateUnmatched: false,
			plugins: [EmbedCode, RevealHighlight, RevealNotes]
		});
		loading = false;
	});
</script>

<div class="reveal">
	<div class="slides">
		<Intro />
		<Environment />
		<AppShell />
		<Navigation />
		<UiLibrary />
		<Theme />
		{#if $material}
			<Material />
		{/if}
		<Collections />
		<Ratings />
		{#if $ngrx}
			<NgRx />
		{/if}
		{#if $unitTest}
			<UnitTest />
		{/if}
	</div>
</div>

{#if loading}
	<div class="absolute inset-0 grid place-items-center">
		<ProgressRadial meter="stroke-primary-500">{$t('loading')}</ProgressRadial>
	</div>
{/if}
