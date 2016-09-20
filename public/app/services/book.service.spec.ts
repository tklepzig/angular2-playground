import { Book } from '../../app/models/book';
import { BookService } from '../../app/services/book.service';
import { BookRepository } from './book.repository';

describe('BookService', () => {

    let bookRepositoryStub = <BookRepository>{ getBooks: (): Book[] => [] }
    let bookService = new BookService(bookRepositoryStub);

    it('getBooks() returns a list of books', done => {
        let books = bookService.getBooks();

        expect(books.length).toBeDefined();
        expect(books.length).toBe(3);
        done();
    });

    it('addBook()...', done => {
        done();
    });

    it('removeBook()...', done => {
        done();
    });
});