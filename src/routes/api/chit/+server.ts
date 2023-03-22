import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('http://localhost:5000/chit');

	const data = await response.json();
	return json(data, {
		status: 200
	});
};

export const POST: RequestHandler = async ({ request }) => {
	const chit = await request.json();
	const settings = {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(chit)
	};
	const response = await fetch('http://localhost:5000/chit', settings);
	const data = await response.json();

	return json({ success: true, data });
};

export const DELETE: RequestHandler = async ({ request }) => {
	const chit = await request.json();
	const settings = {
		method: 'DELETE',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	};
	const response = await fetch(`http://localhost:5000/chit/${chit.id}`, settings);
	const data = await response.json();

	return json({ success: true, data });
};
