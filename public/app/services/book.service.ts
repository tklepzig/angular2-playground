import {Injectable} from '@angular/core';
import { Book } from '../models/book';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
    constructor(private bookRepository: BookRepository) {
    }

    getBooks(): Promise<Book[]> {
        return this.bookRepository.getBooks();
    }

    getBook(bookId: string): Promise<Book> {
        return this.bookRepository.getBook(bookId);
    }

    removeBook(bookId: string): Promise<Book> {
        return this.bookRepository.removeBook(bookId);
    }

    addBook(isbn: string): Promise<Book> {
        return this.bookRepository.addBook(isbn);
    }
}