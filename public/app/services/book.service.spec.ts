import { Book } from '../../app/models/book';
import { BookService } from '../../app/services/book.service';

describe('BookService', () => {
    let bookService = new BookService();

    it('getBooks() returns a list of books', done => {
        let books = bookService.getBooks();

        expect(books.length).toBeDefined();
        expect(books.length).toBe(3);
        done();
    });
});