import {Injectable} from '@angular/core';
import { Book } from '../models/book';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
    constructor(private bookRepository: BookRepository) {
    getBooks(): Book[] {
        let books: Book[] = [];
        books.push(<Book>{ name: "Book1" });
        books.push(<Book>{ name: "Book2" });
        books.push(<Book>{ name: "Book3" });

        return books;
    }
}