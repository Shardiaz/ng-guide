export const ssr = false;
import { loadTranslations, locales } from '$lib/i18n';
import './styles.scss';

/** @type {import('@sveltejs/kit').Load} */
export const load = async () => {
	const fallbackLocale = 'en';
	const initLocale = localStorage.getItem('slides.locale') || navigator.language.slice(0, 2);
	const currentLocale = locales.get().includes(initLocale) ? initLocale : fallbackLocale;
	localStorage.setItem('slides.locale', currentLocale);
	await loadTranslations(currentLocale); // keep this just before the `return`

	return {};
};
