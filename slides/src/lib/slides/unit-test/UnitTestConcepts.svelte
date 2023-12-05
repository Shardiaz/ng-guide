<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('unit-test.concepts.title')}</h3></Hero>
	<Description>{$t('unit-test.concepts.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.concepts.providers.title')}</h3></Hero>
	<Description>{$t('unit-test.concepts.providers.description')}</Description>
	<Code external="code/test-providers.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.concepts.jasmine.title')}</h3></Hero>
	<Description>{$t('unit-test.concepts.jasmine.description')}</Description>
	<Code external="code/jasmine.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.concepts.jasmine.title')}</h3></Hero>
	<Description>{$t('unit-test.concepts.jasmine.spy')}</Description>
	<Code external="code/spy.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.concepts.jasmine.title')}</h3></Hero>
	<Description>{$t('unit-test.concepts.jasmine.spy')}</Description>
	<Code external="code/expect.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.concepts.fixture.title')}</h3></Hero>
	<Description>{$t('unit-test.concepts.fixture.description')}</Description>
	<Code external="code/fixture.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('unit-test.concepts.fixture.title')}</h3></Hero>
	<Description>{$t('unit-test.concepts.fixture.queries')}</Description>
	<Code external="code/fixture-queries.ts" />
</Slide>
