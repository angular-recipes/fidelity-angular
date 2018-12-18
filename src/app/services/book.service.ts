import { Http } from '@angular/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private url = 'http://localhost:3000/books/';

  constructor(private http: Http) {
    this.books = [
      new Book(
        'The Alchemist',
        'Paulo Cohelo',
        33,
        3),
      new Book(
        '5 point someone',
        'Chetan Bhagat',
        12,
        2
      ),
      new Book(
        '4 hour work week',
        'Tim Ferris',
        43,
        5
      ),
      new Book(
        'Power of Now',
        'Eckhart Tolle',
        54,
        4
      )];
  }

  getBooks() {
    return this.http.get(this.url);
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
  }

  getBook(id: number) {
    return this.http.get(this.url + id);
  }

  saveBook(book: Book) {
    this.books.push(book);
  }
}
