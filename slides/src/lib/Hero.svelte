<script lang="ts">
	import hero from '$lib/assets/shipbit-logo.svg';
	export let cssClass: string | null = null;
</script>

<div class="flex items-center justify-center gap-4">
	<img class={cssClass} data-id="hero" src={hero} alt="The ShipBit Logo" />
	<div data-id="hero-slot">
		<slot />
	</div>
</div>

<style>
	img:has(+div> h1) {
		height: 6rem;
	}
	img:has(+div> h2) {
		height: 3.4rem;
	}
	img:has(+div> h3) {
		height: 2.4rem;
	}
	img:has(+div> h4) {
		height: 1.5rem;
	}
</style>
