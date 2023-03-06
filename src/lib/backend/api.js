const localBackendUrl = 'http://localhost:5000';

export function fetchChits() {
	console.log('[BE] Fetching all chits');

	return [
		{
			id: 1,
			content: 'Testing chits with Svelte!',
			author: {
				name: 'Miika Savela',
				handle: '@Miisa'
			}
		},
		{
			id: 2,
			content: 'This is my first chit',
			author: {
				name: 'Panu Puula',
				handle: '@Papu'
			}
		}
	];
}

export function toggleBeLike(chitId) {
	console.log(`[BE] Incrementing like for chit ID ${chitId}`);
}

export async function postChit(chit) {
	const data = {
		chit: {
			content: chit.content
		},
		author: {
			id: chit.userId
		}
	};
	const settings = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};

	try {
		const endpoint = `${localBackendUrl}/chit/`;
		const response = await fetch(endpoint, settings);

		const data = await response.json();
		return data;
	} catch (e) {
		console.error('Error:', e);
		return e;
	}
}
