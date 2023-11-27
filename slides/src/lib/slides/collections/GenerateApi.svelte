<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('collections.generate.api.title')}</h3></Hero>
	<Description>{$t('collections.generate.api.description')}</Description>
	<Code external="code/generate-api.elm" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.api.models.title')}</h3></Hero>
	<Description>{$t('collections.generate.api.models.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\api\src\lib\model\collection.model.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.api.models.title')}</h3></Hero>
	<CodeReference file="ng-17-workshop\projects\api\src\lib\model\kpi.model.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.api.services.title')}</h3></Hero>
	<Description>{$t('collections.generate.api.services.base')}</Description>
	<CodeReference file="ng-17-workshop\projects\api\src\lib\services\entity.service.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.api.mock.title')}</h3></Hero>
	<Description>{$t('collections.generate.api.mock.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\api\src\lib\mock-backend.interceptor.ts" />
</Slide>
<Slide>
	<Hero><h3>{$t('collections.generate.api.export.title')}</h3></Hero>
	<Description>{$t('collections.generate.api.export.description')}</Description>
	<CodeReference file="ng-17-workshop\projects\api\src\public-api.ts" />
</Slide>
