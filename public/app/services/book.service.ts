import {Injectable} from '@angular/core';
import { Book } from '../models/book';

@Injectable()
export class BookService {
    getBooks(): Book[] {
        let books: Book[] = [];
        books.push(<Book>{ name: "Book1" });
        books.push(<Book>{ name: "Book2" });
        books.push(<Book>{ name: "Book3" });

        return books;
    }
}