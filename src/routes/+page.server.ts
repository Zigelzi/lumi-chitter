import type { ChitData } from '$lib/types/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('api/chit');

	if (response.ok) {
		const data = await response.json();
		const chits: ChitData[] = data.data.chits;
		return { chits };
	}
	return {};
};
