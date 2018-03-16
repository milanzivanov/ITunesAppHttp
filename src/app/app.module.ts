import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RecentArticlesComponent } from './recent-articles/recent-articles.component';


@NgModule({
  declarations: [
    AppComponent,
    RecentArticlesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
