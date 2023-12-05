<script>
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import avatar from '$lib/assets/my-avatar.png';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('feedback')}</h2></Hero>
		<div class="r-stretch">
			<img class="inline" src={avatar} alt="My avatar" />
			<a href="https://gitlab.com/shipbit/ng-guide" target="_blank">repository</a>
		</div>
	</Slide>
</Slide>
