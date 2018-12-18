import { Http } from '@angular/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/books/';

  constructor(private http: Http) {
  }

  getBooks() {
    return this.http.get(this.url);
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
    return this.http.post(this.url, book);
  }
}
