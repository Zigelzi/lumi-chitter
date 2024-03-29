import type { ChitData } from '$lib/types/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, cookies }) => {
	const response = await fetch('api/chit');
	if (response.ok) {
		const data = await response.json();
		const chits: ChitData[] = data.chits;
		return { chits };
	}
	return {};
};
