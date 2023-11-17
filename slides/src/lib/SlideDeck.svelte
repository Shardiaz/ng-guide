<script lang="ts">
	import EmbedCode from '$lib/plugins/embed-code/embed-code';
	import Reveal from 'reveal.js';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/blood.css';
	import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
	import RevealNotes from 'reveal.js/plugin/notes/notes';

	import { onMount } from 'svelte';
	import Components from './slides/components/Components.svelte';
	import Intro from './slides/intro/Intro.svelte';
	import Setup from './slides/setup/Setup.svelte';

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
		<Setup />
		<Components />
	</div>
</div>
