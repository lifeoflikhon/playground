import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SearchBarModule} from './widgets/search-bar/search-bar.module';
import {PageListModule} from './widgets/page-list/page-list.module';
import {WikipediaService} from './services/wikipedia.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchBarModule,
    PageListModule,
    HttpClientModule
  ],
  providers: [WikipediaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
