/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BookListComponent } from './bookList/bookList.component';
import { Book } from './models/book';
import { BookRepository } from './services/book.repository';
import * as mockito from 'ts-mockito';

describe('AppComponent', () => {
  beforeEach(() => {

    var mockBookRepository = mockito.mock(BookRepository);
    mockito.when(mockBookRepository.getBooks()).thenReturn(new Promise<Book[]>((resolve) => resolve(new Array<Book>())));

    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BookListComponent
      ],
      providers: [
        { provide: BookRepository, useValue: mockito.instance(mockBookRepository) }
      ]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Books');
  }));
});
