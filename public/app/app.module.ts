import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { BookListComponent }   from './bookList/bookList.component';
import { BookRepository } from './services/book.repository';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    BookListComponent
  ],
  providers: [
    BookRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
