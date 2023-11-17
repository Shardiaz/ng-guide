<script lang="ts">
	import { AppBar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import Hero from './Hero.svelte';
	import { locale, t } from './translation/i18n';
	$: curentLocale = locale.get();
	$: locale.set(curentLocale), localStorage.setItem('slides.locale', curentLocale);
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<button class="btn"></button>
	</svelte:fragment>
	<span class="title-wrap">
		<Hero>{$t('title')}</Hero>
	</span>

	<svelte:fragment slot="trail">
		<RadioGroup>
			<RadioItem bind:group={curentLocale} name="locale" value="en">En</RadioItem>
			<RadioItem bind:group={curentLocale} name="locale" value="de">De</RadioItem>
		</RadioGroup>
	</svelte:fragment>
</AppBar>

<style lang="scss" scoped>
	.title-wrap {
		max-height: 2rem;
        font-size: 2rem;
        text-transform: uppercase;
	}
</style>
