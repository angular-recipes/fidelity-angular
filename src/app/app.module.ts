import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AboutPageComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
