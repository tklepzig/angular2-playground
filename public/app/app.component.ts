import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app',
  templateUrl: 'app/app.tmpl.html'
})
export class AppComponent {

  books: Book[];

  constructor() {
    this.books = [];
    this.books.push(<Book>{ name: "Book1" });
    this.books.push(<Book>{ name: "Book2" });
    this.books.push(<Book>{ name: "Book3" });
  }
}
