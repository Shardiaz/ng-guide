<script>
	import Card from '$lib/Card.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import avatar from '$lib/assets/my-avatar.png'
	import { t } from '$lib/translation/i18n';
</script>

<Slide url="https://www.shipbit.de/">
	<Card>
		<Hero cssClass="h-14"><span class="font-bold">SHIPBIT</span></Hero>
		<div class="flex">
			<div class="flex flex-col justify-center">
				<span>{$t('speaker.host')}</span>
				<strong>Kingsley Owusu-Sekyere</strong>
				<span class="italic text-xs"> Senior Software Developer </span>
			</div>
			<img src={avatar} style="max-height: 10rem" alt="My avatar" />
		</div>
	</Card>
</Slide>
