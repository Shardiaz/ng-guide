<script lang="ts">
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import CreateTheme from './CreateTheme.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('theme.title')}</h2></Hero>
		<Description>{$t('theme.description')}</Description>
		<div class="r-stretch r-stack">
			<img src="unstyled.png" alt="unstyled app" />
			<img class="fragment" src="styled.png" alt="styled app" />
		</div>
	</Slide>
	<CreateTheme />
</Slide>

<style lang="scss" scoped>
	img {
		max-width: 70%;
	}
</style>
