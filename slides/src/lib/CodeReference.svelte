<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import Code from './Code.svelte';
	import { material } from './stores/features.store';

	type VersionMeta = { label: string; lines: LinesType; url: string };
	type Versions = '16' | '17';
	type LinesType = string | true | null;
	type LinesInput = Record<Versions, LinesType> | LinesType;

	const root: Record<Versions, string> = {
		16: 'ng-16-workshop',
		17: 'ng-17-workshop'
	};
	export let clipHighlight = false;
	export let file: string;
	export let animationId: string | null = null;
	export let lines: LinesInput = true;
	export let language: string | null = null;
	export let range: [number, number] | null = null;
	export let classes: string | undefined = undefined;
	$: filename = file.split(/[\\/]+/).pop();
	$: versioned = /(.css|.scss)$/.test(file) == false;
	$: versions = new Array<VersionMeta>(getVersion('16'), getVersion('17'));

	let selectedIndex = 1;

	function getVersion(version: Versions) {
		return {
			label: `v${version}`,
			lines: getLines(version),
			url: getUrl(version)
		};
	}

	function getLines(version: Versions): LinesType {
		return isVersioned(lines) ? lines[version] : lines;
	}

	function getUrl(version: Versions): string {
		return file
			.replace(/\\/g, '/')
			.replace(root[16], root[version])
			.replace(root[17], root[version]);
	}

	function isVersioned(input: LinesInput): input is Record<Versions, LinesType> {
		return typeof input === 'object';
	}
</script>

<div class="coderef r-stretch {classes}">
	<div class="flex items-center justify-center gap-4">
		<span class="badge variant-filled text-lg">{filename}</span>
		{#if versioned}
			<RadioGroup>
				{#each versions as version, i}
					<RadioItem bind:group={selectedIndex} name="selectedIndex" value={i}>
						{version.label}
					</RadioItem>
				{/each}
			</RadioGroup>
		{/if}
	</div>

	{#each versions as version, i}
		{#if versioned || i === versions.length - 1}
			<div
				class="coderef-scroll"
				class:highlight={clipHighlight}
				class:hidden={versioned && selectedIndex !== i}
			>
				<Code
					external={version.url}
					{animationId}
					lines={version.lines}
					{language}
					{range}
					branch={$material ? 'feature/material' : 'main'}
				/>
			</div>
		{/if}
	{/each}
</div>

<style lang="scss" scoped>
	.coderef {
		display: grid;
		grid-template-rows: auto 1fr;
		gap: 0.5rem;

		.coderef-scroll {
			grid-row: 2;
			overflow: auto;
			margin-bottom: 4rem;
			:global(pre) {
				margin-top: 0;
				margin-bottom: 0;
			}
			:global(pre code) {
				max-height: none;
			}
		}
	}

	.highlight {
		--non-hightlight-display: none;
	}
</style>
