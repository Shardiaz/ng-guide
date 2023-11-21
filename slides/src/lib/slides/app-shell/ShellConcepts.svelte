<script>
	import Code from '$lib/Code.svelte';
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('shell.concepts.title')}</h3></Hero>
	<Description>{$t('shell.concepts.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('shell.concepts.template.title')}</h3></Hero>
	<Description>{$t('shell.concepts.template.description')}</Description>
</Slide>
<Slide>
	<Hero><h3>{$t('shell.concepts.template.title')}</h3></Hero>
	<Description>{$t('shell.concepts.template.inerpolation')}</Description>
	<CodeReference
		language="html"
		file="ng-16-workshop\src\app\app.component.ts"
		lines="9"
		clipHighlight
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('shell.concepts.template.title')}</h3></Hero>
	<Description>{$t('shell.concepts.template.bindings')}</Description>
	<CodeReference
		file="ng-17-workshop\src\app\shell\shell.component.html"
		lines="9,10"
		clipHighlight
	/></Slide
>
<Slide>
	<Hero><h3>{$t('shell.concepts.template.title')}</h3></Hero>
	<Description>{$t('shell.concepts.template.inputs')}</Description>
	<CodeReference
		file="ng-16-workshop\src\app\navigation\navigation.component.ts"
		lines="17,18"
		clipHighlight
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('shell.concepts.directives.title')}</h3></Hero>
	<table>
		<thead>
			<tr>
				<th align="left">{$t('shell.concepts.directives.types')}</th>
				<th align="left">{$t('shell.concepts.directives.details')}</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td align="left">{$t('shell.concepts.directives.components.title')}</td>
				<td align="left">{$t('shell.concepts.directives.components.description')}</td>
			</tr>
			<tr>
				<td align="left">{$t('shell.concepts.directives.attribute.title')}</td>
				<td align="left"> {$t('shell.concepts.directives.attribute.description')} </td>
			</tr>
			<tr>
				<td align="left">{$t('shell.concepts.directives.structural.title')}</td>
				<td align="left"> {$t('shell.concepts.directives.structural.description')} </td>
			</tr>
		</tbody>
	</table>
</Slide>
<Slide>
	<Hero><h3>{$t('shell.concepts.directives.title')}</h3></Hero>
	<Description>{$t('shell.concepts.directives.structural.ngif')}</Description>
	<Code external="code/ngif.html" />
</Slide>
<Slide>
	<Hero><h3>{$t('shell.concepts.directives.title')}</h3></Hero>
	<Description>{$t('shell.concepts.directives.structural.ngfor')}</Description>
	<Code external="code/ngfor.html" />
</Slide>
<Slide>
	<Hero><h3>{$t('shell.concepts.directives.title')}</h3></Hero>
	<Description>{$t('shell.concepts.directives.structural.ngswitch')}</Description>
	<Code external="code/ngswitch.html" />
</Slide>
