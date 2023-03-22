import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({fetch}) => {
	const response = await fetch('http://localhost:5000/chit');

	const data = await response.json();
	return json(data, {
		status: 200
	})
}

export const POST:RequestHandler = async ({request}) => {
	const data = await request.json();
	console.log(data);

	return json({ success: true });
};
