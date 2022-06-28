import ReferenceItem from './reference-item';
import { positiveInteger } from "../decorators";

export default class Encyclopedia extends ReferenceItem {
    private _copies: number;

    @positiveInteger
    get copies(): number {
        // eslint-disable-next-line no-underscore-dangle
        return this._copies;
    }

    // @positiveInteger
    set copies(value: number) {
        // eslint-disable-next-line no-underscore-dangle
        this._copies = value;
    }



    constructor(title: string, year: number, id: number, public edition: number) {
        super(title, year, id);
    }

    override printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} ${this.year}`);
    }

    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
