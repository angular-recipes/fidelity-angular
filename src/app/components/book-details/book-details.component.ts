import { Http } from '@angular/http';
import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book: Book;
  showEditForm = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private http: Http
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(res => this.book = res.json());
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  saveBook(book: Book) {
    book.price = +book.price;
    book.rating = +book.rating;
    this.bookService
      .updateBook(book)
      .subscribe(res => this.router.navigate(['/home']));
  }

}
