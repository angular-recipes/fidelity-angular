import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  constructor() {
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

  getBooks(): Book[] {
    return this.books;
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
  }
}
