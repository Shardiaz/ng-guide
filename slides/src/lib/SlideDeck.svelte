<script lang="ts">
	import Reveal from 'reveal.js';
	import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
	import RevealNotes from 'reveal.js/plugin/notes/notes';
	import Externalcode from '$lib/plugins/externalcode/externalcode';
	import 'reveal.js/dist/reveal.css';
	import 'reveal.js/dist/theme/blood.css';

	import { onMount } from 'svelte';
	import Intro from './slides/intro/Intro.svelte';
	import Setup from './slides/setup/Setup.svelte';
	import Components from './slides/components/Components.svelte';

	onMount(() => {
		const reveal = new Reveal({
			autoAnimateUnmatched: false
		});
		reveal.initialize({
			plugins: [Externalcode, RevealHighlight, RevealNotes]
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
