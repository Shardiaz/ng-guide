<script>
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
	import GenerateUnitTest from './GenerateUnitTest.svelte';
	import UnitTestConcepts from './UnitTestConcepts.svelte';
</script>

<Slide>
	<Slide>
		<Hero><h2>{$t('unit-test.title')}</h2></Hero>
		<Description>{$t('unit-test.description')}</Description>
		<img class="center r-stretch" src="/karma.png" alt="Karma/Jasmine screenshot" />
	</Slide>
	<UnitTestConcepts />
	<GenerateUnitTest />
</Slide>
