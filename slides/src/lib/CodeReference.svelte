<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import Code from './Code.svelte';

	type versions = 'ng16' | 'ng17';

	const root: Record<versions, string> = {
		ng16: 'ng-16-workshop',
		ng17: 'ng-17-workshop'
	};

	export let file: string;
	export let animationId: string | null = null;
	export let lines: Partial<Record<versions, string | true | null>> = {
		ng16: true,
		ng17: true
	};
	export let language: string | null = null;
	export let range: [number, number] | null = null;

	$: filename = file.split(/[\\/]+/).pop();
	$: ng16 = file.replace(/\\/g, '/').replace(root.ng17, root.ng16);
	$: ng17 = file.replace(/\\/g, '/').replace(root.ng16, root.ng17);
	let selectedIndex = 0;
</script>

<div class="r-stretch">
	<div class="flex items-center justify-center gap-4">
		<span class="badge variant-filled text-lg">{filename}</span>
		<RadioGroup>
			<RadioItem bind:group={selectedIndex} name="selectedIndex" value={0}>v16</RadioItem>
			<RadioItem bind:group={selectedIndex} name="selectedIndex" value={1}>v17</RadioItem>
		</RadioGroup>
	</div>
	<div class:hidden={selectedIndex === 1}>
		<Code external={ng16} {animationId} lines={lines.ng16} {language} {range} />
	</div>
	<div class:hidden={selectedIndex !== 1}>
		<Code external={ng17} {animationId} lines={lines.ng17} {language} {range} />
	</div>
</div>
