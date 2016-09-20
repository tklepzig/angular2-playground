import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable()
export class BookRepository {

    mock: Book[] = [];

    constructor() {
        this.mock.push(<Book>{ name: "Book1" });
        this.mock.push(<Book>{ name: "Book2" });
        this.mock.push(<Book>{ name: "Book3" });
    }

    getBooks(): Book[] {
        return this.mock;
    }
}

