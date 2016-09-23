import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Book } from '../models/book';

@Injectable()
export class BookRepository {

    mock: Book[] = [];

    constructor(private http: Http) {
        this.mock.push(<Book>{ title: "Book1", id: "1" });
        this.mock.push(<Book>{ title: "Book2", id: "2" });
        this.mock.push(<Book>{ title: "Book3", id: "3" });
    }

    getBooks(): Book[] {
        return this.mock;
    }

    removeBook(bookId: string): void {
        //TODO: use promise for calling server
        for (var key in this.mock) {
            if (this.mock.hasOwnProperty(key)) {
                var element = this.mock[key];
                if (element.id === bookId) {
                    this.mock.splice(this.mock.indexOf(element), 1);
                    break;
                }
            }
        }
    }

    addBook(isbn: string): Promise<Book> {
        return new Promise((resolve, reject) => {
            this.http.get("http://localhost:51112/addBook/" + isbn)
                .map((response: Response) => <Book>response.json())
                .subscribe(book => {
                    this.mock.push(book);
                    resolve(book);
                }
                , error => {
                    console.log(error); reject(error);
                });
        });

    }
}

