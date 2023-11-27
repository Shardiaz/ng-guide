<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ratings.generate.title')}</h3></Hero>
	<Description>{$t('ratings.generate.description')}</Description>
	<Code external="code/generate-ratings.elm" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.service.title')}</h3></Hero>
	<Description>{$t('ratings.generate.service.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\ratings\src\lib\ratings.service.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.routes.title')}</h3></Hero>
	<Description>{$t('ratings.generate.routes.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\ratings\src\lib\routes.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.dashboard.html.title')}</h3></Hero>
	<Description>{$t('ratings.generate.dashboard.html.description')}</Description>
	<CodeReference
		file="ng-17-workshop\projects\ratings\src\lib\dashboard\dashboard.component.html"
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.dashboard.ts.title')}</h3></Hero>
	<Description>{$t('ratings.generate.dashboard.ts.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\ratings\src\lib\dashboard\dashboard.component.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.dashboard.css.title')}</h3></Hero>
	<Description>{$t('ratings.generate.dashboard.css.description')}</Description>
	<CodeReference
		file="ng-17-workshop\projects\ratings\src\lib\dashboard\dashboard.component.scss"
	/>
</Slide>

<Slide>
	<Hero><h3>{$t('ratings.generate.edit.html.title')}</h3></Hero>
	<Description>{$t('ratings.generate.edit.html.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\ratings\src\lib\edit\edit.component.html" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.edit.ts.title')}</h3></Hero>
	<Description>{$t('ratings.generate.edit.ts.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\ratings\src\lib\edit\edit.component.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('ratings.generate.edit.css.title')}</h3></Hero>
	<CodeReference file="ng-17-workshop\projects\ratings\src\lib\edit\edit.component.scss" />
</Slide>
