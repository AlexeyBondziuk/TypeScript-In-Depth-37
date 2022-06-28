import { Person, Logger as DamageLogger, Author } from './interfaces';
import {Category} from './enums';
import { createCustomer, getBooksByCategoryPromise } from './functions';

export type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    markDamaged?: DamageLogger;
};

type BookProperties = keyof Book;

type PersonBook = Person & Book;

type BookOrUndefined = Book | undefined;

type BookRequiredFields = Required<Book>;
type UpdatedBook = Partial<Book>;
type AuthorWoEmail = Omit<Author, 'email'>;
type CreateCustomerFunctionType = typeof createCustomer;

type fn = (p1: string, p2: number, p3: boolean) => symbol;
type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

type RequiredProps<T extends object> = {[prop in keyof T]: {} extends Pick<T, prop> ? never : prop}[keyof T];
type RequiredFields = RequiredProps<Book>;

type OptionalProps<T extends object> = {[prop in keyof T]: {} extends Pick<T, prop> ? prop : never}[keyof T];
type OptionalFields = OptionalProps<Book>;

// type OptionalPrimitiveFields = OptionalProps<number>;

type RemoveProps<T extends object, TProps extends keyof T> = {[prop in keyof T as Exclude<prop, TProps>]: T[prop] };
type BookRequiredPropsType = RemoveProps<Book, OptionalFields>;
type BookOptionalPropsType = RemoveProps<Book, RequiredFields>;

type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type FN = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;

export {
    BookProperties,
    PersonBook,
    BookOrUndefined,
    BookRequiredFields,
    UpdatedBook,
    AuthorWoEmail,
    CreateCustomerFunctionType,
    Unpromisify,
    FN
};
