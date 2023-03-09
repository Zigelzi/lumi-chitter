import { json } from '@sveltejs/kit';

export const POST = async (event) => {
	const data = await event.request.json();
	console.log(data);

	return json({ success: true });
};
