<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('collections.concepts.title')}</h3></Hero>
	<Description>{$t('collections.concepts.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('collections.concepts.routes.title')}</h3></Hero>
	<Description>{$t('collections.concepts.routes.description')}</Description>
	<Code external="code/feature-routes.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.concepts.http.title')}</h3></Hero>
	<Description>{$t('collections.concepts.http.description')}</Description>
	<Code external="code/http.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.concepts.http.title')}</h3></Hero>
	<Description>{$t('collections.concepts.http.interceptors')}</Description>
	<Code external="code/interceptor.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.concepts.forms.title')}</h3></Hero>
	<Description>{$t('collections.concepts.forms.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('collections.concepts.forms.title')}</h3></Hero>
	<Description>{$t('collections.concepts.forms.markup')}</Description>
	<Code external="code/forms.html" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.concepts.forms.title')}</h3></Hero>
	<Description>{$t('collections.concepts.forms.builder')}</Description>
	<Code external="code/forms.ts" />
</Slide>
