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
  color = 'pink';


  constructor(
    private bookService: BookService,
    private http: Http
  ) {
  }

  ngOnInit() {
    console.warn('Books loaded'); 
    this.bookService
      .getBooks()
      .subscribe((res) => this.books = res);
  }

  rateUp(book: Book) {
    this.bookService.rateUp(book).subscribe();
  }

  rateDown(book: Book) {
    this.bookService.rateDown(book).subscribe();
  }

}
