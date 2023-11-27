<script lang="ts">
	import HeaderBar from '$lib/HeaderBar.svelte';
	import '../app.postcss';
</script>

<svelte:head>
	<title>ShipBit guide to Angular</title>
</svelte:head>

<div class="absolute inset-0 flex flex-col">
	<HeaderBar />
	<slot />
</div>
