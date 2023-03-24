import { SECRET_KEY } from '$env/static/private';
import jwt from 'jsonwebtoken';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const token = String(cookies.get('token'));

	// TODO: Add fetching user with the token.
	return {
		token: token
	};
};
