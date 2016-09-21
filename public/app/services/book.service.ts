import {Injectable} from '@angular/core';
import { Book } from '../models/book';
import { BookRepository } from './book.repository';

@Injectable()
export class BookService {
    constructor(private bookRepository: BookRepository) {
    }

    getBooks(): Book[] {
        return this.bookRepository.getBooks();
    }

    removeBook(bookId: string): void {
        this.bookRepository.removeBook(bookId);
    }

    addBook(isbn: string) {
        return this.bookRepository.addBook(isbn);
    }
}