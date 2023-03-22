const localBackendUrl = 'http://localhost:5000';

export function fetchChits() {
	console.log('[BE] Fetching all chits');

	return [
		{
			id: 1,
			author: 'MSav',
			handle: '@miisa',
			content: 'Testing chits with Svelte!',
			likes: [],
			authorId: '4487df84-770b-4b31-9299-8902bf50efbb'
		},
		{
			id: 2,
			author: 'Panu Puula',
			handle: '@papu',
			content: 'This is my first chit',
			likes: [],
			authorId: 'ace16e01-47bd-4297-921e-05b72e013cc0'
		}
	];
}

export function toggleBeLike(chitId) {
	console.log(`[BE] Incrementing like for chit ID ${chitId}`);
}

export async function postChit(chit) {
	const chitData = {
		content: chit.content
	};
	const settings = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(chitData)
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
