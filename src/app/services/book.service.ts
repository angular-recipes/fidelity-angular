import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { pipe, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = environment.apiUrl;
  private books: Book[];

  constructor(private http: Http) {
  }

  getBooks() {
    if(this.books && this.books.length) {
      return of(this.books);
    }

    return this.http
      .get(this.url)
      .pipe(
        map(res => res.json()),
        tap(res => this.books = res)
      )
      ;
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
    return this.http.put(this.url + book.id, book);
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
    return this.http.put(this.url + book.id, book);
  }

  getBook(id: number) {
    return this.http.get(this.url + id);
  }

  saveBook(book: Book) {
    return this.http
      .post(this.url, book)
      .pipe(
        tap(res => this.books = null)
      )
      ;
  }

  updateBook(book: Book) {
    return this.http.put(this.url + book.id, book);
  }
}
