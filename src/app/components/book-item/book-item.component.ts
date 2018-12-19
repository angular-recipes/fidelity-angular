import { Book } from './../../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book : Book;
  @Input() isHighRated: boolean;
  @Output() rateUpBtnClick = new EventEmitter();
  @Output() rateDownBtnClick = new EventEmitter();

  constructor() { 
    console.log('cons', this.book);
  }

  ngOnInit() {
    console.log('on init', this.book);
  }

  handleRateUpBtnClick() {
    this.rateUpBtnClick.emit(this.book);
  }

  handleRateDownBtnClick() {
    this.rateDownBtnClick.emit(this.book);
  }

}
