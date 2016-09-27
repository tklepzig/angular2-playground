import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book } from '../models/book';

@Injectable()
export class BookRepository {

    constructor(private http: Http) {
    }

    getBooks(): Promise<Book[]> {
        return new Promise((resolve, reject) => {
            this.http.get("http://localhost:51112/books")
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
            this.http.get("http://localhost:51112/book/" + bookId)
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
            this.http.delete("http://localhost:51112/book/" + bookId)
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
            this.http.put("http://localhost:51112/book/" + isbn, '')
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

