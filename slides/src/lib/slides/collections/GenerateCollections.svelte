<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('collections.generate.title')}</h3></Hero>
	<Description>{$t('collections.generate.description')}</Description>
	<Code external="code/generate-collections.elm" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.service.title')}</h3></Hero>
	<Description>{$t('collections.generate.service.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\collections\src\lib\collections.service.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.routes.title')}</h3></Hero>
	<Description>{$t('collections.generate.routes.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\collections\src\lib\routes.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.overview.html.title')}</h3></Hero>
	<Description>{$t('collections.generate.overview.html.description')}</Description>
	<CodeReference
		file="ng-17-workshop\projects\collections\src\lib\overview\overview.component.html"
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.overview.ts.title')}</h3></Hero>
	<Description>{$t('collections.generate.overview.ts.description')}</Description>
	<CodeReference
		file="ng-17-workshop\projects\collections\src\lib\overview\overview.component.ts"
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.overview.css.title')}</h3></Hero>
	<Description>{$t('collections.generate.overview.css.description')}</Description>
	<CodeReference
		file="ng-17-workshop\projects\collections\src\lib\overview\overview.component.scss"
	/>
</Slide>

<Slide>
	<Hero><h3>{$t('collections.generate.edit.html.title')}</h3></Hero>
	<Description>{$t('collections.generate.edit.html.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\collections\src\lib\edit\edit.component.html" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.edit.ts.title')}</h3></Hero>
	<Description>{$t('collections.generate.edit.ts.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\collections\src\lib\edit\edit.component.ts" />
</Slide>
