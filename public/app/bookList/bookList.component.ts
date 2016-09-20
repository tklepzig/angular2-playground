import { Component } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { BookRepository } from '../services/book.repository';

@Component({
  selector: 'book-list',
  templateUrl: 'app/bookList/bookList.tmpl.html',
  providers: [BookService, BookRepository]
})
export class BookListComponent {

  books: Book[];

  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }
}
