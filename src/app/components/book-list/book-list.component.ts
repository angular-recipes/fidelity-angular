import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor() {
  }

  ngOnInit() {
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

}
