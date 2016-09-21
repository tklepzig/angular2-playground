import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { BookListComponent }   from './bookList/bookList.component';
import { BookRepository } from './services/book.repository';

@NgModule({
  imports: [BrowserModule, HttpModule],
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
