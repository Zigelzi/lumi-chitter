const fetchChits = () => {
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
};

const toggleBeLike = (chitId) => {
	console.log(`[BE] Incrementing like for chit ID ${chitId}`);
};

export { fetchChits, toggleBeLike };
