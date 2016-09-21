import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable()
export class BookRepository {

    mock: Book[] = [];

    constructor() {
        this.mock.push(<Book>{ name: "Book1", id: "1" });
        this.mock.push(<Book>{ name: "Book2", id: "2" });
        this.mock.push(<Book>{ name: "Book3", id: "3" });
    }

    getBooks(): Book[] {
        return this.mock;
    }

    removeBook(bookId: string) {
        //TODO: use promise for calling server
        for (var key in this.mock) {
            if (this.mock.hasOwnProperty(key)) {
                var element = this.mock[key];
                if (element.id === bookId) {
                    this.mock.splice(this.mock.indexOf(element), 1);
                    break;
                }
            }
        }
    }

    addBook(isbn: string) {

        // return Promise.resolve();
        //TODO: use promise for calling server
        //http://isbndb.com/api/v2/json/DAEM28V1/book/9780137081073

        // this.mock.push();
    }
}

