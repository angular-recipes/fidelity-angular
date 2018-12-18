import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  today = new Date();

  constructor(
    private bookService: BookService,
    private http: Http
  ) {
  }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe((res) => this.books = res.json());
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book);
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book);
  }

}
