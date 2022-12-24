import { writable } from 'svelte/store';

// export const ChitStore = writable([
// 	{
// 		id: 1,
// 		author: 'MSav',
// 		handle: '@miisa',
// 		content: 'Testing chits with Svelte!'
// 	}
// ]);

function createChitStore() {
	const { subscribe, set, update } = writable([
			{
				id: 1,
				author: 'MSav',
				handle: '@miisa',
				content: 'Testing chits with Svelte!'
			}
		]);

		const addChit = function(newChit) {
			update(existingChits => {
				newChit.id = GenerateId(existingChits);
				existingChits.push(newChit);
				console.log(newChit);
				console.log(existingChits);
			});
		}

	return {
		subscribe,
		update,
		addChit
	}
}

function GenerateId(existingChits) {
	let maxId = existingChits.reduce((acc, currentChit) => Math.max(acc, currentChit.id), 0);
	let newId = maxId + 1;
	return newId;
}

export const ChitStore = createChitStore();