<script>
	import Code from '$lib/Code.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ngrx.concepts.title')}</h3></Hero>
	<Description>{$t('ngrx.concepts.description')}</Description>
	<a
		href="https://redux.js.org/tutorials/essentials/part-1-overview-concepts#when-should-i-use-redux"
		target="_blank"
	>
		{$t('ngrx.concepts.redux-link')}
	</a>
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.concepts.actions.title')}</h3></Hero>
	<Description>{$t('ngrx.concepts.actions.description')}</Description>
	<Code external="code/ngrx-actions.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.concepts.selectors.title')}</h3></Hero>
	<Description>{$t('ngrx.concepts.selectors.description')}</Description>
	<Code external="code/ngrx-selectors.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.concepts.effects.title')}</h3></Hero>
	<Description>{$t('ngrx.concepts.effects.description')}</Description>
	<Code external="code/ngrx-effects.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.concepts.reducer.title')}</h3></Hero>
	<Description>{$t('ngrx.concepts.reducer.description')}</Description>
	<Code external="code/ngrx-reducer.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.concepts.feature.title')}</h3></Hero>
	<Description>{$t('ngrx.concepts.feature.description')}</Description>
	<Code external="code/ngrx-feature.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ngrx.concepts.dev.title')}</h3></Hero>
	<Description>{$t('ngrx.concepts.dev.description')}</Description>
	<Code external="code/ngrx-dev-tools.ts" />
	<a
		href="https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"
	>
		Redux DevTools
	</a>
</Slide>
