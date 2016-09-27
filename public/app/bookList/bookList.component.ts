import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'book-list',
  templateUrl: 'app/bookList/bookList.tmpl.html',
  providers: [BookService]
})
export class BookListComponent {

  books: Book[];

  constructor(private bookService: BookService) {
    bookService.getBooks().then(books => this.books = books);
  }

  removeBook(bookId: string) {
    this.bookService.removeBook(bookId).then(() => {
      this.bookService.getBooks().then(books => this.books = books);
    });
  }
}
