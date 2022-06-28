import { ShelfItem } from '../interfaces';

export default class Shelf<T extends ShelfItem> {
    private items: Array<T> = [];

    public add(item: T): void {
        this.items.push(item);
    }

    public getFirst(): T {
        return this.items[0];
    }

    public find(title: string): T {
        return this.items.find(el => el.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}
