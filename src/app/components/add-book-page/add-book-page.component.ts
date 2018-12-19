import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-page',
  templateUrl: './add-book-page.component.html',
  styleUrls: ['./add-book-page.component.css']
})
export class AddBookPageComponent implements OnInit {
  newBook: Book;
  constructor(
    private bookService: BookService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.newBook = new Book(null, null, null, null);
  }

  saveBook(book: Book) {
    book.price = +book.price;
    book.rating = +book.rating;
    this.bookService
      .saveBook(book)
      .subscribe(res => this.router.navigate(['/home']));
  }

}
