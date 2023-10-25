import { writable } from 'svelte/store';

export interface Topic {
	key: string;
}

export const topics$ = writable<Topic[]>([]);
