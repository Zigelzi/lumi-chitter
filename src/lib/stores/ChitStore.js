import { writable } from 'svelte/store';

function createChitStore() {
	const { subscribe, set, update } = writable([
		{
			id: 1,
			author: 'MSav',
			handle: '@miisa',
			content: 'Testing chits with Svelte!',
			likes: 0
		}
	]);

	const addChit = function (newChit) {
		update((existingChits) => {
			newChit.id = generateId(existingChits);
			existingChits.push(newChit);
			return existingChits;
		});
	};

	const incrementLike = function(chitId) {
		update((existingChits) => {
			let chitToUpdate = existingChits.find(chit => chit.id == chitId);
			chitToUpdate.likes++;
			
			return existingChits;
		})
	}

	return {
		subscribe,
		update,
		addChit,
		incrementLike
	};
}

function generateId(existingChits) {
	let maxId = existingChits.reduce((acc, currentChit) => Math.max(acc, currentChit.id), 0);
	let newId = maxId + 1;
	return newId;
}

export const ChitStore = createChitStore();
