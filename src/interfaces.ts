import { Category } from './enums';

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}

interface DamageLogger {
    (param: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}

interface TOptions {
    duration?: number;
    speed?: number;
}

export { Book, DamageLogger as Logger, Person, Author, Librarian, TOptions };

export interface Magazine {
    title: string;
    publisher: string;
}

export interface ShelfItem {
    title: string;
}

export interface LibMgrCallback {
    (err: Error | null, titles: string[] | null): void;
}

export interface Callback<T> {
    (err: Error | null, T: string[] | null): void;
}
