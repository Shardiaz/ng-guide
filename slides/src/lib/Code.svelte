<script lang="ts">
	import 'reveal.js/plugin/highlight/monokai.css';

	export let animationId: string | null = null;
	export let lines: string | true | null = null;
	export let language: string | null = null;
	export let external: string | null = null;
	export let externalStart: number | null = null;
	export let externalEnd: number | null = null;
</script>

<pre data-id={animationId || undefined}>
	<code
		data-url={external || undefined}
		data-line-start={externalStart ?? undefined}
		data-line-end={externalEnd ?? undefined}
		class={language ? `language-${language}` : undefined}
		data-trim
		data-line-numbers={lines || undefined}
		data-ln-start-from={externalStart ?? undefined}
		data-noescape>
		<slot />
	</code>
</pre>

<style lang="scss">
	pre,
	code {
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>
