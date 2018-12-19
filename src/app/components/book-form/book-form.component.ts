import { Book } from './../../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  @Input() book: Book;
  @Output() formSave = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleFormSubmit() {
    this.formSave.emit(this.book);
  }

}
