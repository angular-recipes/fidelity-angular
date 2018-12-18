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

  saveBook() {
    this.newBook.price = +this.newBook.price;
    this.newBook.rating = +this.newBook.rating;
    this.bookService
      .saveBook(this.newBook)
      .subscribe(res => this.router.navigate(['/home']));
  }

}
