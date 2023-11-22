<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ui.concepts.title')}</h3></Hero>
	<Description>{$t('ui.concepts.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('ui.concepts.library.title')}</h3></Hero>
	<Description>{$t('ui.concepts.library.description')}</Description>
	<Code external="code/library.elm" />
</Slide>
<Slide>
	<Hero><h3>{$t('ui.concepts.api.title')}</h3></Hero>
	<Description>{$t('ui.concepts.api.description')}</Description>
	<Code external="code/public-api.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ui.concepts.alias.title')}</h3></Hero>
	<Description>{$t('ui.concepts.alias.description')}</Description>
	<Code external="code/alias.json" />
</Slide>
<Slide>
	<Hero><h3>{$t('ui.concepts.projects.title')}</h3></Hero>
	<Description>{$t('ui.concepts.projects.description')}</Description>
	<Code external="code/projects.elm" />
</Slide>
<Slide>
	<Hero><h3>{$t('ui.concepts.pipes.title')}</h3></Hero>
	<Description>{$t('ui.concepts.pipes.description')}</Description>
	<Code external="code/pipes.html" />
</Slide>
