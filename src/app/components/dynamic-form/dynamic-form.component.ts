import { of, from, interval, pipe } from 'rxjs';
import { map, filter, throttleTime } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  questions: any[];
  searchTerm: string;
  constructor(private http: Http) { }

  ngOnInit() {
    // this.http
    //   .get('http://localhost:3000/questions')
    //   .subscribe(res => this.questions = res.json());

    // let obs = interval(100);

    // obs
    // .pipe(
    //   map(val => val * 2),
    //   filter(val => val % 4 == 0),
    //   throttleTime(1000)
    // )
    // .subscribe(value => console.log(value));

    let obs = from(this.searchTerm);

    obs.subscribe(term => console.log(term));
  }

}
