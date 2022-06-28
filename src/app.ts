/* eslint-disable no-redeclare */

// showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

import { createCustomerID, getBooksByCategoryPromise, logSearchResults } from './functions';
import { Category } from './enums';
import { Author, Librarian, Logger, Magazine } from './interfaces';
import { Library, Shelf, UL } from './classes';
import {
    AuthorWoEmail,
    Book,
    Book as BookType,
    BookRequiredFields,
    CreateCustomerFunctionType,
    FN,
    PersonBook,
    UpdatedBook
} from './types';

// import Encyclopedia from './classes/encyclopedia';

// Task 02.01
// //////////////////////////////////////////////////////////////////////

// 1. Реализуйте функцию getAllBooks(), которая возвращает коллекцию книжек. Объявите эту
// коллекцию внутри функции, используя let/const.

// console.log(getAllBooks());

// Реализуйте функцию logFirstAvailable(), которая принимает массив книг в качестве параметра
// и выводит в консоль:
//     a. количество книг в массиве
//     b. название первой доступной книги

// logFirstAvailable(getAllBooks());

// Объявите enum Category для хранения следующих категорий книг:
//     a. JavaScript
//     b. CSS
//     c. HTML
//     d. TypeScript
//     e. Angular

// Реализуйте функцию getBookTitlesByCategory(), которая на вход будет получать категорию и
// возвращать массив наименований книг, которые принадлежат указанной категории.
// Используйте тип Array<string> и объявленный enum.

// console.log(getBookTitlesByCategory(BookCategory.JavaScript));

// Реализуйте функцию logBookTitles(), которая принимает массив строк и выводит его в
// консоль. Используйте типы: string[] и void. Вызовите функции getBookTitlesByCategory() и
// logBookTitles().

// logBookTitles(getBookTitlesByCategory(BookCategory.JavaScript));

// Реализуйте функцию getBookAuthorByIndex(), которая принимает index книжки в массиве и
// возвращает пару: название книжки + автор. Используйте tuple для возвращаемого типа.
// Вызовите данную функцию.

// console.log(getBookAuthorByIndex(10));

// Реализуйте функцию calcTotalPages(), которая подсчитывает количество страниц книг в трех
// библиотеках города, используя следующие данные:
//     a. [{ lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
//         { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
//         { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];
//     b. Для подсчетов используйте тип bigint

// console.log(calcTotalPages());

// Task 03.01

// Создайте функцию createCustomerID(), которая принимает имя клиента (name: string) и его
// идентификатор (id: number) и возвращает конкатенацию этих значений в виде строки.

// console.log(createCustomerID('Bob', 1));

// Объявите переменную myID строчного типа и вызовите функцию с значениями Ann, 10.
// Полученное значение выведите в консоль.

const myId: string = createCustomerID('Ann', 10);
// console.log(myId);

// Объявите переменную idGenerator и задайте тип функции createCustomerID(). Присвойте этой
// переменной функциональное выражение, используя стрелочную функцию. Тело аналогично
// функции createCustomerID().

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${name}-${id}`;
idGenerator = createCustomerID;
// console.log(idGenerator('John', 3));

// Task 03.02

// Создайте функцию createCustomer(), которая принимает три параметра:
//     a. name: string – обязательный
//     b. age: number – необязательный
//     c. city: string – необязательный
// Функция должна выводить имя клиента в лог используя template string, а также, если задан
// возраст, то она должна дополнительно выводить возраст в консоль. Если задан город, то
// дополнительно должна выводить город в консоль. Вызовите эту функцию с одним, двумя и
// тремя параметрами

// createCustomer('Bob', 26, 'Dnepr');
// createCustomer('Bob', 26);
// createCustomer('Bob');

// Внесите изменения в функцию getBookTitlesByCategory() – добавьте для параметра значение
// по умолчанию Category.JavaScript. Вызовите эту функцию без параметра.

// console.log(getBookTitlesByCategory());

// Внесите изменения в функцию logFirstAvailable() – добавьте для параметра значение по
// умолчанию – вызов функции getAllBooks(). Вызовите эту функцию без параметра.

// logFirstAvailable();

// Создайте функцию getBookByID(), которая принимает id книжки и возвращает книжку.
// Используйте функцию getAllBooks(), метод массива find() и стрелочную функцию. Вызовите
// функцию и передайте 1.

// console.log(getBookByID(1));

// Создайте функцию checkoutBooks(), которая принимает два параметра:
//     a. customer: string
//     b. bookIDs: number[] – переменное значение идентификаторов книжек
// Функция должна проверить доступность каждой книжки, заданной идентификатором и
// вернуть массив наименований (title) книжек, которые доступны. (book.available = true).
// Используйте функцию getBookById(). Также функция должна выводить в лог имя заданного
// клиента.

// console.log(checkoutBooks('apple', 1, 2, 3));

// Объявите переменную myBooks и сохраните в нее результат вызова функции
// checkoutBooks(‘Ann’, 1, 2, 4). Выведите результат в консоль

// const myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);

// Task 03.03

// Добавьте в первой строчке app.ts опцию для ESLint
// /* eslint-disable no-redeclare */
// Эта опция необходима для объявления нескольких сигнатур функций с одинаковыми
// именами

// Создайте функцию getTitles(), которая может принимать 1 или 2 параметра:
//     a. если функция принимает 1 параметр, то он может быть либо string (author), либо boolean (available)
//     b. если функция принимает 2 параметра, то они должны быть id, available.

// Функция должна возвращать массив книг по автору, или по доступности, или по id и доступности.
// Для реализации функции создайте три сигнатуры с разными типами параметров и
// реализацию с рест параметром типа any[] или unknown[] или [string | boolean] | [number, boolean].

// Функция должна анализировать количество и типы параметров с помощью оператора typeof
// и формировать результирующий массив из массива, полученного с помощью функции
// getAllBooks(), анализируя или свойство book.author, book.available, book.id.

// console.log(getTitles('Evan Burchard'));
// console.log(getTitles(true));
// console.log(getTitles(1, true));

// Объявите переменную checkedOutBooks и вызовите функцию getTitles(false). Выведите
// результат в консоль.

// const checkedOutBooks = getTitles(false);
// console.log(checkedOutBooks);

// Task 03.04

// Создайте функцию-утверждение assertStringValue(), которая принимает один параметр типа
// any. Функция должна проверять, является ли тип переданного аргумента строкой. Если нет, то
// генерировать исключение «value should have been a string».

// Создайте функцию bookTitleTransform(), которая принимает один параметр - название
// книжки (тип параметра any). С помощью assertStringValue проверяет, действительно ли
// название книжки является строкой, и если да, то возвращает перевертишь этой строки,
// используя спред оператор и методы массива reverse() и join().

// console.log(bookTitleTransform('LOR'));
// console.log(bookTitleTransform(123));

// Task 04.01

// Объявите интерфейс Book, который включает следующие поля:
// a. id - число
// b. title - строка
// c. author - строка
// d. available - логический
// e. category – категория

// Создайте функцию printBook(), которая на вход принимает книгу и выводит в консоль фразу
// book.title + by + book.author. Для типа параметра используйте интерфейс Book.

// Объявите переменную myBook и присвойте ей следующий объект
// {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     year: 2015,
//     copies: 3
// }

const myBook: BookType =  {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    pages: 200,
    markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
};

// Вызовите функцию printBook() и передайте ей myBook. Никаких ошибок при этом не должно
// появляться.

// printBook(myBook);

//    Добавьте в интерфейс Book необязательное свойство markDamaged, которое является
// методом. Метод принимает на вход строчный параметр reason и ничего не возвращает.
//    Добавьте этот метод в объект myBook. Метод должен выводить строчку `Damaged: ${reason}`,
// используя стрелочную функцию. Вызовите этот метод и передайте строку ‘missing back cover

// myBook.markDamaged('missing back cover');

// Task 04.02

// Объявите интерфейс DamageLogger, который будет описывать тип для функции, которая
// принимает один строчный параметр и ничего не возвращает.

// Объявите переменную logDamage используя объявленный ранее интерфейс. Создайте
// функцию, которая удовлетворяет этому интерфейсу, присвойте объявленной переменной.
// Вызовите функцию.

let logDamage: Logger;

logDamage = (param: string) => {
    console.log(param);
};

// logDamage('box');

// Task 04.03

// Объявите интерфейс Person, который содержит два строчных свойства – name и email.

// Объявите интерфейс Author на основе интерфейса Person, который расширяет указанный
// интерфейс числовым свойством numBooksPublished

// Объявите интерфейс Librarian на основе интерфейса Person, который расширяет указанный
// интерфейс двумя свойствами:
//     a. Строчное свойство department
//     b. Функция assistCustomer, которая принимает два строчных параметра custName и
// bookTitle и ничего не возвращает.

// Объявите переменную favoriteAuthor используя интерфейс Author, задайте значение в виде
// литерала объекта

const favoriteAuthor: Author = {
    email: 'email@d.com',
    name: 'Bob',
    numBooksPublished: 10

};

// Объявите переменную favoriteLibrarian используя интерфейс Librarian, задайте значение в
// виде литерала объекта.

// const favoriteLibrarian: Librarian = {
//     email: 'mail@d.com',
//     name: 'Polina',
//     department: 'best',
//     assistCustomer: (custName: string, bookTitle: string): void => {
//         console.log(`${custName} ${bookTitle}`);
//     }
// };

// Task 04.04

// Объявите переменную offer
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};

// Выведите в консоль значение следующих выражений, используя optional chaining.
//     a. offer.magazine
//     b. offer.magazine.getTitle()
//     c. offer.book.getTitle()
//     d. offer.book.authors[0]

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05

// Объявите тип BookProperties, который включает свойства интерфейса Book, используя keyof
// оператор.

// Реализуйте функцию getProperty(), которая принимает два параметра:
//     a. книжку
//     b. название свойства из интерфейса Book
// и возвращает значение этого свойства из переданного объекта, если это не функция, для
// функции возвращает ее имя. Используйте тип any для возвращаемого значения.


// Вызовите эту функцию три раза со значением для второго параметра: title, markDamaged, isbn

// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));

// Task 05.01

// Создайте класс ReferenceItem, который содержит:
//  a. Строчное свойство title
//  b. Числовое свойство year
//  c. Конструктор c двумя параметрами: строчный параметр newTitle, числовой параметр
// newYear, который в консоль выводит строчку 'Creating a new ReferenceItem...' и
// инициализирует поля.
//  d. Метод printItem() без параметров, который ничего не возвращает. Этот метод должен
// использовать template string literal и выводить строчку «title was published in year» в
// консоль.

// Объявите переменную ref и проинициализируйте ее объектом ReferenceItem. Передайте
// значения параметров в конструктор. Вызовите метод printItem().

// const ref = new ReferenceItem('LOR', 1954, 123);
// ref.printItem();

// Закомментируйте конструктор, свойства title и year и реализуйте создание свойств через
// параметры конструктора (title- public, year - private).

// Создайте приватное (“soft private”) строчное свойство _publisher.
//     a. Добавьте геттер publisher, который преобразовывает свойство _publisher в верхний
// регистр и возвращает его.
//     b. Добавьте сеттер publisher, который принимает строчный параметр newPublisher и
// устанавливает значение свойства _publisher в значение этого параметра.
//     c. Проинициализируйте свойство ref.publisher каким-либо строчным значением и
// выведите его в консоль. Результат должен быть в верхнем регистре

// ref.publisher = 'test';
// console.log(ref.publisher);

// Создайте приватное (“hard private”) числовое свойство id.
//     a. Внесите изменения в конструктор для инициализации этого свойства.
//     b. Добавьте метод getID(), который должен возвращать значение свойства id.
//     c. Выведите объект в консоль.
//     d. Вызовите метод getID().

// console.log(ref);
// console.log(ref.getId());

// Создайте статичное строчное свойство department и проинициализируйте его каким-либо
// значением по умолчанию. Внесите изменения в метод printItem() – добавьте вывод в консоль
// этого статического свойства

// ref.printItem();

// Task 05.02

// Создайте класс Encyclopedia как наследника класса ReferenceItem. Добавьте одно
// дополнительное числовое публичное свойство edition. Используйте параметры конструктора.

// Объявите переменную refBook и создайте объект Encyclopedia. Вызовите метод printItem();

// const refBook = new RefBook('LOR', 1954, 123, 1);
// refBook.printItem();

// Переопределите метод printItem(). Добавьте ключевое слово override. Пусть он делает то, что
// делал и дополнительно выводит строчку в консоль «Edition: edition (year)». Вы получите
// ошибку, что свойство year недоступно. Чтобы оно было доступно измените модификатор
// доступа в классе ReferenceItem на protected.

// Task 05.03

// Внесите изменения в класс ReferenceItem – сделайте его абстрактным.
// Добавьте абстрактный метод printCitation(), который не принимает параметров и не
// возвращает значения. У этого метода не должно быть реализации. После этого Вы получите
// ошибку в классе Encyclopedia, которая будет сообщать, что не реализован абстрактный метод.
// Добавьте реализацию метода printCitation в класс Encyclopedia. Метод должен выводить в
// консоль строчку «title – year».

// Объявите переменную refBook и создайте объект Encyclopedia. Вызовите метод
// printCitation();

// const refBook = new Encyclopedia('LOR', 1954, 123, 1);
// refBook.printCitation();

// Task 05.04

// Создайте класс UniversityLibrarian, который реализует интерфейс Librarian и реализуйте все
// необходимые свойства. Метод assistCustomer должен выводить в консоль строчку
// `${this.name} is assisting ${custName} with the book ${bookTitle}`.

// Объявите переменную favoriteLibrarian используя интерфейс Librarian и проинициализируйте
// ее с помощью объекта, созданного классом UniversityLibrarian(). Никаких ошибок при этом не
// должно возникать. Проинициализируйте свойство name и вызовите метод assistCustomer().

const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'super name';
// favoriteLibrarian.assistCustomer('first', 'second');

// Task 05.05

// Создайте тип PersonBook. Используйте для этого интерфейсы Person, Book и пересечение
// типов.

// Объявите переменную c типом PersonBook, проинициализируйте ее литералом, выведите ее
// в консоль

const personBook: PersonBook = {
    author: '',
    available: false,
    category: undefined,
    email: '',
    id: 0,
    name: '',
    title: ''
};

// console.log(personBook);

// Создайте тип BookOrUndefined. Используйте для этого объединение интерфейса Book и
// undefined.

// Замените тип возвращаемого значения в функции getBookByID на BookOrUndefined.

// Создайте функцию setDefaultConfig, которая принимает объект options. Тип для объекта
// TOptions опишите интерфейсом с необязательными числовыми свойствами duration и speed.
// Функция должна устанавливать значения свойств по-умолчанию и некоторые значения, если
// они не заданы, используя логический оператор налового присваивания, и возвращать объект

// console.log(setDefaultConfig ({}));


// Task 06.03

// const refBook = new Encyclopedia('LOR', 1954, 123, 1);
// printRefBook(refBook);

// Создайте экземпляр класса UniversityLibrarian и снова вызовите для него функцию
// printRefBook

// printRefBook(favoriteLibrarian);


// Task 06.05

const flag = true;

// if (flag) {
//     const imp = await import('./classes');
//
//     const reader = new imp.Reader();
//     reader.name = 'Bob';
//     console.log(reader);
// }

// Task 06.06

let library: Library;

// let library = new Library();
let newLibrary: Library = {
    address: '',
    id: 0,
    name: ''
};

// console.log(newLibrary);


// Task 07.01

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// console.log(purge<Book>(inventory));
//
// console.log(purge<number>([1,2,3]));


// Task 07.02

const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));

// console.log(bookShelf.getFirst().title);

const magazines = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];

const magazineShelf = new Shelf<Magazine>();
magazines.forEach(magazine => magazineShelf.add(magazine));

// console.log(magazineShelf.getFirst().title);

// Task 07.03

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'title'));

// Task 07.04

const bookRequiredFields: BookRequiredFields = {
    author: '',
    available: false,
    category: undefined,
    id: 0,
    markDamaged: undefined,
    pages: 0,
    title: ''
};

const updatedBook: UpdatedBook = {};
const AuthorWoEmail: AuthorWoEmail = {
    name: '',
    numBooksPublished: 0
};

const createCustomerFunctionType: Parameters<CreateCustomerFunctionType> = ['Bob', 13];
// createCustomer(...createCustomerFunctionType);

// Task 08.01

// const foo = new UL.UniversityLibrarian();
// UL.UniversityLibrarian.a = 1;
// UL.UniversityLibrarian['a']  = 2;
// foo['foo'] = function () {};
// console.log(foo);
// const proto = Object.getPrototypeOf(foo);
// proto.foo = function () {};
// proto['foo'] = function () {};

// Task 08.02

const fLibrarian = new UL.UniversityLibrarian();
// console.log(fLibrarian);

favoriteLibrarian.name = 'Anna';
// favoriteLibrarian['printLibrarian']();
// console.log(fLibrarian.a);

// Task 08.03

// const ul = new UL.UniversityLibrarian();
// ul.assistFaculty = null;
// ul.teachCommunity = null;
// console.log(ul);

// Task 08.04

// const refBook = new RefBook('LOR', 1954, 123, 1);
// refBook.printItem();

// Task 08.05

// const ul = new UL.UniversityLibrarian();
// ul.name = 'Bob';
// ul.assistCustomer('Fantasy', getAllBooks()[0].title);
// console.log(ul);

// Task 08.06

// const ul = new UL.UniversityLibrarian();
// ul.name = 'Bob';
// ul.assistCustomer('Fantasy', getAllBooks()[0].title);
// console.log(ul);

// Task 08.07

// const refBook = new RefBook('LOR', 1954, 123, 1);
// refBook.copies = 10;
// console.log(refBook);

// Task 09.01

// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02

// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then((booksTitles: FN) => {
//         console.log(booksTitles);
//
//         return booksTitles.length;
//     })
//     .then((booksNumber) => {
//         console.log(booksNumber);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// getBooksByCategoryPromise(Category.Software)
//     .then((booksTitles) => {
//         console.log(booksTitles);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// console.log('End');

// Task 09.02

// console.log('Begin');
// logSearchResults(Category.JavaScript);
// logSearchResults(Category.Software)
//     .catch(err => console.log(err));
// console.log('End');
