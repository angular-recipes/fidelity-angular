import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { SurnamePipe } from './pipes/surname.pipe';
import { BookItemComponent } from './components/book-item/book-item.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BookFormComponent } from './components/book-form/book-form.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

let routes: Routes = [
  {path: 'home', component: BookListComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'add-book', component: AddBookPageComponent},
  {path: 'book/:id', component: BookDetailsComponent},
  {path: 'edit-book/:id', component: EditPageComponent},
  {path: 'dynamic', component: DynamicFormComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AboutPageComponent,
    BookDetailsComponent,
    AddBookPageComponent,
    SurnamePipe,
    BookItemComponent,
    HighlightDirective,
    BookFormComponent,
    EditPageComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
