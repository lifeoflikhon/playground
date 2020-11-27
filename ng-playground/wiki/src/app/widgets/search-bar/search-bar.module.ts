import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarRootComponent } from './search-bar-root/search-bar-root.component';
import {WikipediaService} from '../../services/wikipedia.service';



@NgModule({
  declarations: [SearchBarRootComponent],
  exports: [
    SearchBarRootComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [WikipediaService]
})
export class SearchBarModule { }
