// eslint-disable-next-line @typescript-eslint/no-var-requires
const { skeleton } = require('@skeletonlabs/tw-plugin');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {}
	},

	plugins: [
		skeleton({
			themes: { preset: ["crimson"]}
		})
	]
};

module.exports = config;
