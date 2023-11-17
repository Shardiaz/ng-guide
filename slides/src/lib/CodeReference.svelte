<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import Code from './Code.svelte';

	const root = {
		ng16: 'ng-16-workshop',
		ng17: 'ng-17-workshop'
	};

	export let file: string;
	export let animationId: string | null = null;
	export let lines: string | true | null = null;
	export let language: string | null = null;
	export let range: [number, number] | null = null;

	$: filename = file.split(/[\\/]+/).pop();
	$: ng16 = file.replace('\\', '/').replace(root.ng17, root.ng16);
	$: ng17 = file.replace('\\', '/').replace(root.ng16, root.ng17);
	let currentFile = '';
</script>

<div class="flex items-center justify-center gap-4">
	<span class="badge variant-filled text-lg">{filename}</span>
	<RadioGroup>
		<RadioItem bind:group={currentFile} name="currentFile" value={ng16}>v16</RadioItem>
		<RadioItem bind:group={currentFile} name="currentFile" value={ng17}>v17</RadioItem>
	</RadioGroup>
</div>
<div class:hidden={currentFile === ng17}>
	<Code external={ng16} {animationId} {lines} {language} {range} />
</div>
<div class:hidden={currentFile !== ng17}>
	<Code external={ng17} {animationId} {lines} {language} {range} />
</div>
