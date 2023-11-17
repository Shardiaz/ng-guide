<script lang="ts">
	import HeaderBar from '$lib/HeaderBar.svelte';
	import SlideDeck from '$lib/SlideDeck.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>ShipBit guide to Angular</title>
</svelte:head>

<div class="absolute inset-0 flex flex-col">
	<HeaderBar />
	<SlideDeck />
</div>
