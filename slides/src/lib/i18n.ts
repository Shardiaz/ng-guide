import i18n from 'sveltekit-i18n';

/** @type {import('sveltekit-i18n').Config} */
const config = {
	loaders: [
		{
			locale: 'en',
			key: '',
			loader: async () => (await import('./translation/en.json')).default
		},
		{
			locale: 'de',
			key: '',
			loader: async () => (await import('./translation/de.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
