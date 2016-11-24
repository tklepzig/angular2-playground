"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var book_service_1 = require('../services/book.service');
var BookListComponent = (function () {
    function BookListComponent(bookService) {
        var _this = this;
        this.bookService = bookService;
        bookService.getBooks().then(function (books) { return _this.books = books; });
    }
    BookListComponent.prototype.removeBook = function (bookId) {
        var _this = this;
        this.bookService.removeBook(bookId).then(function () {
            _this.bookService.getBooks().then(function (books) { return _this.books = books; });
        });
    };
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'book-list',
            templateUrl: 'app/bookList/bookList.tmpl.html',
            providers: [book_service_1.BookService]
        }), 
        __metadata('design:paramtypes', [book_service_1.BookService])
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=bookList.component.js.map