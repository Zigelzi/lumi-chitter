import type { HandleFetch } from '@sveltejs/kit';

export const handleFetch: HandleFetch = ({ request, event, fetch }) => {
	if (request.url.startsWith('http://localhost:5000/')) {
		const token = event.request.headers.get('cookie');
		if (token) {
			request.headers.set('token', token);
		}
	}
	return fetch(request);
};
