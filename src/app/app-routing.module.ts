import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

let routes: Routes = [
  {path: 'home', component: BookListComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'add-book', component: AddBookPageComponent},
  {path: 'book/:id', component: BookDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
