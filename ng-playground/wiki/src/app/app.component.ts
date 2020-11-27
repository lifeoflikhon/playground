import {Component} from '@angular/core';
import {WikipediaService} from './services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchResultPages: any[];

  constructor(private wikipedia: WikipediaService) {
  }

  onSearch(searchKey: string): void {
    this.wikipedia.search(searchKey).subscribe((response: any) => {
      this.searchResultPages = response.query.search;
    });
  }
}
