import { Component } from '@angular/core';
import { BookListComponent } from './bookList/bookList.component';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BookService]
})
export class AppComponent {
  constructor(private bookService: BookService) {
  }

  addBook(isbn: string) {
    this.bookService.addBook(isbn);
  }
}
