export interface ChitData {
	id: number;
	content: string;
	author: User;
}

export interface User {
	name: string;
	handle: string;
}
