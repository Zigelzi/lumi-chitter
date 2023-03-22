export interface ChitData {
    id: number;
    content: string;
    author: Author;
}

export interface Author {
    name: string;
    handle: string;
}