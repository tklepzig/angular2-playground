import { Component } from '@angular/core';
import { BookListComponent } from './bookList/bookList.component';
import { BookService } from './services/book.service';

@Component({
  selector: 'app',
  templateUrl: 'app/app.tmpl.html',
  providers: [BookService]

})
export class AppComponent {

  constructor(private bookService: BookService) {
  }

  addBook(isbn: string) {
    this.bookService.addBook(isbn);
  }

}
