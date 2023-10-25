<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { topics$ } from '$lib/stores/topics.store';
	import { t } from '$lib/translation/i18n';
</script>

<Slide>
	<Hero><h2>{$t('overview.title')}</h2></Hero>
	<Description>{$t('overview.description')}</Description>
	<ul>
		{#each $topics$ as topic}
			<li>{$t(topic.key)}</li>
		{/each}
	</ul>
</Slide>
