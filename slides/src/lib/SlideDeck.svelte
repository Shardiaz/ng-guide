<script lang="ts">
	import EmbedCode from '$lib/plugins/embed-code/embed-code';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/blood.css';
	import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
	import RevealNotes from 'reveal.js/plugin/notes/notes';

	import { onMount } from 'svelte';
	import AppShell from './slides/app-shell/AppShell.svelte';
	import Intro from './slides/intro/Intro.svelte';
	import Navigation from './slides/navigation/Navigation.svelte';
	import Environment from './slides/setup/Environment.svelte';
	import Theme from './slides/theme/Theme.svelte';
	import UiLibrary from './slides/ui/UiLibrary.svelte';

	onMount(() => {
		Reveal.initialize({
			embedded: false,
			autoAnimateUnmatched: false,
			plugins: [EmbedCode, RevealHighlight, RevealNotes]
		});
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
	</div>
</div>
