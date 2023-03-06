import { writable } from 'svelte/store';
import { fetchChits, toggleBeLike, postChit } from '../backend/api';

function createChitStore() {
	const { subscribe, set, update } = writable(fetchChits());

	const addChit = async function (newChit) {
		let response = postChit(newChit);

		response.then((res) => {
			update((existingChits) => {
				existingChits.push(res.data.chit);
				return existingChits;
			});
		});
	};

	const toggleLike = function (chitId, likerId) {
		update((existingChits) => {
			let chitToUpdate = existingChits.find((chit) => chit.id == chitId);
			let likeIndex = chitToUpdate.likes.indexOf(likerId);

			toggleBeLike(chitId);

			if (likeIndex !== -1) {
				chitToUpdate.likes.splice(likeIndex, 1);
			} else {
				chitToUpdate.likes.push(likerId);
			}

			return existingChits;
		});
	};

	const removeChit = function (removedChit) {
		update((existingChits) => {
			let chitIndex = existingChits.indexOf(removedChit);
			if (chitIndex !== -1) {
				existingChits.splice(chitIndex, 1);
			}

			return existingChits;
		});
	};

	return {
		subscribe,
		update,
		addChit,
		toggleLike,
		removeChit
	};
}

function generateId(existingChits) {
	let maxId = existingChits.reduce((acc, currentChit) => Math.max(acc, currentChit.id), 0);
	let newId = maxId + 1;
	return newId;
}

export const ChitStore = createChitStore();
