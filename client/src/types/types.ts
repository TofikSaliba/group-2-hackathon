export type BookId = string;

export interface BookMetadata {
    _id: BookId;
    title: string;
    region: string;
    comments?: Comment[];
}
export interface Book {
    dividedPages: Page[];
    dataObj: BookMetadata;
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
