import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, fetch, cookies }) => {
	const user = await request.json();
	const settings = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	};
	const response = await fetch('http://localhost:5000/user', settings);
	const data = await response.json();
	cookies.set('token', data.token, {
		path: '/'
	});

	return json(data, {
		status: 200
	});
};
