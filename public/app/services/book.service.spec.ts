import { Book } from '../models/book';
import { BookService } from './book.service';
import { BookRepository } from './book.repository';

describe('BookService', () => {

    let bookRepositoryStub = <BookRepository>{ getBooks: (): Book[] => [] }
    let bookService = new BookService(new BookRepository());

    it('getBooks() returns a list of books', done => {
        let books = bookService.getBooks();

        expect(books.length).toBeDefined();
        expect(books.length).toBe(3);
        done();
    });

    it('addBook()...', done => {
        let books = bookService.getBooks();

        let lengthBefore = books.length;
        bookService.addBook("123456");
        let lengthAfter = books.length;

        expect(lengthBefore + 1).toBe(lengthAfter);
        done();
    });

    it('removeBook()...', done => {
        let books = bookService.getBooks();

        let lengthBefore = books.length;
        bookService.removeBook("2");
        let lengthAfter = books.length;

        expect(lengthBefore - 1).toBe(lengthAfter);
        done();
    });
});