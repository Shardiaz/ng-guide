<script lang="ts" setup>
	import { PUBLIC_API_KEY } from '$env/static/public';
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let content = '';
	$: currentFile &&
		fetch(
			`https://gitlab.com/api/v4/projects/${projectId}/repository/files/${encodeURIComponent(
				currentFile
			)}/raw?ref=master&access_token=${PUBLIC_API_KEY}`
		)
			.then((res) => res.text())
			.then((file) => (content = file));

	export let files: string[] | string;
	let currentFile = '';
	const projectId = '51475043';

	onMount(() => (currentFile = files[0]));
</script>

<TabGroup>
	{#each files as file}
		<Tab bind:group={currentFile} value={file} name="currentFile">
			<svelte:fragment slot="lead">icon</svelte:fragment>
			{file}
		</Tab>
	{/each}

	<svelte:fragment slot="panel">
		{#each files as file, index}
			{#if currentFile === file}
				<pre>
				<code class={`language-${currentFile.split('.').pop()}`} data-trim data-noescape>{content}</code>
			</pre>
			{/if}
		{/each}
	</svelte:fragment>
</TabGroup>
