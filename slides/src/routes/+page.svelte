<script>
	import { t } from '$lib/i18n';
	import { material, ngrx } from '$lib/stores/features.store';
	import { SlideToggle } from '@skeletonlabs/skeleton';
</script>

<div class="grow flex flex-col place-items-center gap-4 p-4">
	<a class="btn bg-primary-500 w-80" href="/slides">{$t('start')}</a>
	<h3>{$t('features')}</h3>
	<ul>
		<li class="p-2">
			<SlideToggle name="material" active="bg-primary-500" bind:checked={$material}>
				Angular Material
			</SlideToggle>
		</li>
		<li class="p-2">
			<SlideToggle name="ngrx" active="bg-primary-500" bind:checked={$ngrx}>NgRx</SlideToggle>
		</li>
	</ul>
</div>
