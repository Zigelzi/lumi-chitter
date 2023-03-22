import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';

export const POST = async (event: RequestEvent) => {
	const data = await event.request.json();
	console.log(data);

	return json({ success: true });
};
