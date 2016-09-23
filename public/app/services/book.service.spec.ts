
import {TestBed, inject} from '@angular/core/testing';
import {BookService} from '../services/book.service';
import {BookRepository} from '../services/book.repository';
import { Book } from '../models/book';

class BookRepositoryStub {

  books: Book[];

  getBooks(): Book[] {
    //return a clone
    return this.books.slice(0);
  }
}

describe('BookService', () => {

  let booksTestData: Book[] = [];
  booksTestData.push(<Book>{ title: "Book1", id: "1" });
  booksTestData.push(<Book>{ title: "Book2", id: "2" });
  booksTestData.push(<Book>{ title: "Book3", id: "3" });

  let bookRepository;
  let bookService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [{ provide: BookRepository, useClass: BookRepositoryStub }] });

    bookRepository = TestBed.get(BookRepository);
    bookRepository.books = booksTestData;
    bookService = new BookService(bookRepository);
  });


  it('getBooks() returns a list of books', done => {
    let books = bookService.getBooks();

    expect(books).toBeDefined();
    expect(books.length).toBeDefined();
    expect(books).toEqual(booksTestData);

    done();
  });

  // it('addBook()...', done => {
  //     let books = bookService.getBooks();

  //     let lengthBefore = books.length;
  //     bookService.addBook("123456").then(() => {
  //         let lengthAfter = books.length;
  //         expect(lengthBefore + 1).toBe(lengthAfter);
  //         done();
  //     });


  // });

  // it('removeBook()...', done => {
  //     let books = bookService.getBooks();

  //     let lengthBefore = books.length;
  //     bookService.removeBook("2");
  //     let lengthAfter = books.length;

  //     expect(lengthBefore - 1).toBe(lengthAfter);
  //     done();
  // });
});