import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Book } from '../models/book';

@Injectable()
export class BookRepository {

    constructor(private http: Http) {
    }

    getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            this.http.get("/books")
                .map((response: Response) => <Book[]>response.json())
                .subscribe(books => {
                    resolve(books);
                }
                , error => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    getBook(bookId: string): Promise<Book> {
        return new Promise((resolve, reject) => {
            this.http.get("/book/" + bookId)
                .map((response: Response) => <Book>response.json())
                .subscribe(book => {
                    resolve(book);
                }
                , error => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    removeBook(bookId: string): Promise<Book> {
        return new Promise((resolve, reject) => {
            this.http.delete("/book/" + bookId)
                .map((response: Response) => <Book>response.json())
                .subscribe(book => {
                    console.dir(book);
                    resolve(book);
                }
                , error => {
                    console.log(error);
                    reject(error);
                });
        });       
    }

    addBook(isbn: string): Promise<Book> {
        return new Promise((resolve, reject) => {
            this.http.put("/book/" + isbn, '')
                .map((response: Response) => <Book>response.json())
                .subscribe(book => {
                    resolve(book);
                }
                , error => {
                    console.log(error);
                    reject(error);
                });
        });
    }
}

