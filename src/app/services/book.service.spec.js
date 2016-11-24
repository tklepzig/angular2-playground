"use strict";
var testing_1 = require('@angular/core/testing');
var book_service_1 = require('../services/book.service');
var book_repository_1 = require('../services/book.repository');
var BookRepositoryStub = (function () {
    function BookRepositoryStub() {
    }
    BookRepositoryStub.prototype.getBooks = function () {
        //return a clone
        return this.books.slice(0);
    };
    return BookRepositoryStub;
}());
describe('BookService', function () {
    var booksTestData = [];
    booksTestData.push({ title: "Book1", id: "1" });
    booksTestData.push({ title: "Book2", id: "2" });
    booksTestData.push({ title: "Book3", id: "3" });
    var bookRepository;
    var bookService;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ providers: [{ provide: book_repository_1.BookRepository, useClass: BookRepositoryStub }] });
        bookRepository = testing_1.TestBed.get(book_repository_1.BookRepository);
        bookRepository.books = booksTestData;
        bookService = new book_service_1.BookService(bookRepository);
    });
    it('getBooks() returns a list of books', function (done) {
        var books = bookService.getBooks();
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
//# sourceMappingURL=book.service.spec.js.map