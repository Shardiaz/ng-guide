<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ratings.concepts.title')}</h3></Hero>
	<Description>{$t('ratings.concepts.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.concepts.guards.title')}</h3></Hero>
	<Description>{$t('ratings.concepts.guards.description')}</Description>
	<Code external="code/guards.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.concepts.guards.title')}</h3></Hero>
	<Description>{$t('ratings.concepts.guards.usage')}</Description>
	<Code external="code/guards-usage.ts" lines="7,12,13,18,23" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.concepts.queries.title')}</h3></Hero>
	<Description>{$t('ratings.concepts.queries.description')}</Description>
	<Code external="code/queries.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.concepts.queries.title')}</h3></Hero>
	<Description>{$t('ratings.concepts.queries.options')}</Description>
	<Code external="code/queries-options.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.concepts.directives.title')}</h3></Hero>
	<Description>{$t('ratings.concepts.directives.description')}</Description>
	<Code external="code/directives.ts" />
</Slide>
