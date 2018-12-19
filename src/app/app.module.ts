import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AddBookPageComponent } from './components/add-book-page/add-book-page.component';
import { SurnamePipe } from './pipes/surname.pipe';
import { BookItemComponent } from './components/book-item/book-item.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AboutPageComponent,
    BookDetailsComponent,
    AddBookPageComponent,
    SurnamePipe,
    BookItemComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
