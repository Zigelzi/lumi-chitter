import type { Actions } from './$types';
import type { User } from '$lib/types/types';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();

		const name = String(data.get('name'));
		const handle = String(data.get('handle'));

		if (name && handle) {
			const user: User = {
				name: name,
				handle: handle
			};

			await fetch('/api/user/', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			});
		}
	}
} satisfies Actions;

async function signUp(user: User) {}
