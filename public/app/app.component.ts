import { Component } from '@angular/core';
import { Book } from './models/book';
import { BookService } from './services/book.service';

@Component({
  selector: 'app',
  templateUrl: 'app/app.tmpl.html',
  providers: [BookService]
})
export class AppComponent {

  books: Book[];

  constructor(private bookService: BookService) {
    this.books = bookService.getBooks();
  }
}
