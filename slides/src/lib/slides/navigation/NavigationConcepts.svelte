<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('nav.concepts.title')}</h3></Hero>
	<Description>{$t('nav.concepts.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('nav.concepts.events.title')}</h3></Hero>
	<Description>{$t('nav.concepts.events.description')}</Description>
	<Code external="code/event.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('nav.concepts.events.title')}</h3></Hero>
	<Description>{$t('nav.concepts.events.subscribe')}</Description>
	<Code external="code/subscribe-event.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('nav.concepts.routes.title')}</h3></Hero>
	<Description>{$t('nav.concepts.routes.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('nav.concepts.routes.title')}</h3></Hero>
	<Description>{$t('nav.concepts.routes.outlet')}</Description>
	<Code external="code/router-outlet.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('nav.concepts.routes.title')}</h3></Hero>
	<Description>{$t('nav.concepts.routes.config')}</Description>
	<Code external="code/app-routes.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('nav.concepts.routes.title')}</h3></Hero>
	<Description>{$t('nav.concepts.routes.lazy')}</Description>
	<Code external="code/lazy-routes.ts" />
</Slide>
