/* eslint-disable no-redeclare */

import * as assert from 'assert';

import { Book, Callback, LibMgrCallback, TOptions } from './interfaces';
import { Category } from './enums';
import { BookOrUndefined, BookProperties, Book as BookType } from './types';
import RefBook from './classes/encyclopedia';

export function getAllBooks(): readonly Book[] {
    const collection = <const>[
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true, category: Category.CSS },
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.Angular },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true, category: Category.TypeScript },
        { id: 5, title: 'JavaScript Testing2', author: 'Liang Yuxian Eugene', available: false, category: Category.JavaScript }
    ];

    return collection;
}
export function logFirstAvailable(arrBooks: readonly Book[] = getAllBooks()) {
    console.log('Length: ', arrBooks.length);
    console.log('First available: ', arrBooks.find(book => book.available)?.title);
}
export function getBookTitlesByCategory(category: Category = Category.JavaScript): string[] {
    return getAllBooks()
        .filter(book => book.category === category)
        .map(book => book.title);
}
export function logBookTitles(titles: string[]): void {
    titles.forEach((title) => {
        console.log(title);
    });
}
export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    return [books[index]?.title, books[index]?.author];
}
export function calcTotalPages(): bigint {
    const booksColl = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return booksColl.reduce((sum: bigint, book) => {
        return sum + BigInt(book.books) * BigInt(book.avgPagesPerBook);
    }, 0n);
}
export function createCustomerID(name: string, id: number): string {
    return `${name}-${id}`;
}
export function createCustomer(name: string, age?: number, city?: string) {
    console.log(`${name} ${age ?? ''} ${city ?? ''}`);
}
export function getBookByID(id: Book['id']): BookOrUndefined {
    return getAllBooks().find(book => book.id === id);
}
export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    const booksTitles = [];

    bookIDs.forEach((idBook: number) => {
        const book: Book = getBookByID(idBook);
        if(book?.available) {
            booksTitles.push(book.title);
        }
    });

    console.log(`Customer: ${customer}`);

    return booksTitles;
}
export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const param = args[0];

        if (typeof param === 'string') {
            return books
                .filter(book => book.author === param)
                .map(({title}) => title);
        } else if (typeof param === 'boolean') {
            return books
                .filter(book => book.available === param)
                .map(({title}) => title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books
                .filter(book => book.id === id && book.available === available)
                .map(({title}) => title);
        }
    }
}
export function assertStringValue(param: any): asserts param is string {
    if (typeof param !== 'string') {
        throw new Error('value should have been a string');
    }
}
export function bookTitleTransform(bookTitle: any) {
    assertStringValue(bookTitle);
    return [...bookTitle].reverse().join('');
}
export function  printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}
export function getProperty(book: BookType, nameProperty: BookProperties): any {
    let value = book[nameProperty];
    if (typeof value === 'function') {
        return value.name;
    } else {
        return value;
    }

}
export function setDefaultConfig (options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 200;

    return options;
}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error('It is not an instance of RefBook');
    }
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function purge<T>(inventory: Array<T>): Array<T> {
    return inventory.slice(2);
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    let value = obj[prop];
    if (typeof value === 'function') {
        return value.name;
    } else {
        return value;
    }
}

export function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
// export function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const bookTitles = getBookTitlesByCategory(category);
            if (bookTitles.length) {
                callback(null, bookTitles);
            } else {
                throw new Error('No books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if(err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bookTitles = getBookTitlesByCategory(category);
            if (bookTitles.length) {
                resolve(bookTitles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async function logSearchResults(category: Category) {
    const result: Awaited<Promise<string[]>> = await getBooksByCategoryPromise(category);
    console.log(result.length);
    return result;
}
