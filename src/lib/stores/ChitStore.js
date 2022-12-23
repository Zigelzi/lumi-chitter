import { writable } from 'svelte/store';

export const ChitStore = writable([
	{
		id: 1,
		author: 'MSav',
		handle: '@miisa',
		content: 'Testing chits with Svelte!'
	}
]);
