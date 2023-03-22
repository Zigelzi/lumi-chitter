const localBackendUrl = 'http://localhost:5000/';

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
	const endpoint = localBackendUrl + 'chit';
	const chitData = {
		content: chit.content
	};
	console.log('Posting chit to: ' + endpoint);
	console.log(JSON.stringify(chitData));
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(chitData)
	});

	const data = await response.json();
	console.log(data);
}
