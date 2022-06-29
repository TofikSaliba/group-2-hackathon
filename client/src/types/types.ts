export type BookId = string;

export interface Book {
    id: BookId;
    title: string;
    dividedPages: Page[];
    region: string;
    comments?: Comment[];
}

export type Page = string;

export type UserId = string;

export type GetBook = () => Promise<Book>;

export interface User {
    id: UserId;
    name: string;
    email: string;
    favoriteBooks: BookId[];
}

export type CommentId = string;

export interface Comment {
    id: CommentId;
    owner: UserId;
    date: Date;
    content: string;
}

export interface Region {
    language: string;
    regionName: string;
    stories: string[];
    _id: string;
}
