import type { Actions } from './$types';
import type { User } from '$lib/types/types';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const name = String(data.get('name'));
		const handle = String(data.get('handle'));

		if (!name) {
			return fail(400, { nameMissing: true });
		}

		if (!handle) {
			return fail(400, { handleMissing: true, previousName: name });
		}

		const user: User = {
			name: name,
			handle: handle
		};

		const response = await fetch('/api/user', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		const responseData = await response.json();
		if (response.ok && responseData.status == 'success') {
			throw redirect(302, '/');
		}
	}
} satisfies Actions;

async function signUp(user: User) {}
