<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { topics$ } from './stores/topics.store';

	export let topic: string | null = null;
	export let animate = true;
	export let url: string | null = null;

	onMount(() => {
		if (!!topic) {
			topics$.update((topics) => topics.concat({ key: topic! }));
		}
	});
	onDestroy(() => {
		if (!!topic) {
			topics$.update((topics) => topics.filter((t) => t.key !== topic));
		}
	});
</script>

<section data-auto-animate={animate || undefined} data-background-iframe={url || undefined}>
	<slot />
</section>
