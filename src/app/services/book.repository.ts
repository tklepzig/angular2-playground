import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Book } from '../models/book';
import { environment } from '../../environments/environment';

@Injectable()
export class BookRepository {

    host: string;

    constructor(private http: Http) {

        if (environment.production)
        {
            this.host = "/";
        }
        else
        {
            this.host = "http://localhost:51112/";
        }
    }

    getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            this.http.get(this.host + "books")
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
            this.http.get(this.host + "book/" + bookId)
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
            this.http.delete(this.host + "book/" + bookId)
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
            this.http.put(this.host + "book/" + isbn, '')
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

