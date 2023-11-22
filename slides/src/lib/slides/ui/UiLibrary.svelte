<script>
	import Description from "$lib/Description.svelte";
	import Hero from "$lib/Hero.svelte";
	import Slide from "$lib/Slide.svelte";
	import { t } from "$lib/i18n";
	import GenerateUiLib from "./GenerateUiLib.svelte";
	import UiLibConcepts from "./UiLibConcepts.svelte";
	import UseUiLib from "./UseUiLib.svelte";

</script>
<Slide>
	<Slide>
		<Hero><h2>{$t('ui.title')}</h2></Hero>
		<Description>{$t('ui.description')}</Description>
		<div class="flex flex-wrap gap-4 justify-center">
			<div class="schema p-4">
                Button
			</div>
			<div class="schema p-4">
                Input
			</div>
			<div class="schema p-4">
                Card
			</div>
			<div class="schema p-4">
                Itemscontrol
			</div>
		</div>
	</Slide>
	<UiLibConcepts />
	<GenerateUiLib />
	<UseUiLib/>
</Slide>