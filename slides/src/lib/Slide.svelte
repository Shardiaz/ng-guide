<script lang="ts">
	export let animate = true;
	export let url: string | null = null;
</script>

<section data-auto-animate={animate || undefined} data-background-iframe={url || undefined}>
	<slot />
</section>
