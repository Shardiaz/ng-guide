import { locales } from '$lib/translation/i18n';
import { writable } from 'svelte/store';

const fallbackLocale = 'en';
const initLocale = localStorage.getItem('slides.locale') || navigator.language.slice(0, 2);
const currentLocale = locales.get().includes(initLocale) ? initLocale : fallbackLocale;

export const locale$ = writable<string>(currentLocale);
locale$.subscribe((currentLocale) => localStorage.setItem('slides.locale', currentLocale));
