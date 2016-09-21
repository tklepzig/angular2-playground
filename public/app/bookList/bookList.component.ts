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
    this.books = bookService.getBooks();
  }

  removeBook(bookId: string) {
    this.bookService.removeBook(bookId);
  }  
}
