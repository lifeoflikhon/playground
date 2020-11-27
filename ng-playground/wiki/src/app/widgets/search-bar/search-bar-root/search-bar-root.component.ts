import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar-root',
  templateUrl: './search-bar-root.component.html',
  styleUrls: ['./search-bar-root.component.scss']
})
export class SearchBarRootComponent implements OnInit {
  @Output() key = new EventEmitter<string>();
  private searchKey: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  // public methods
  onTypingSearchKey(searchKey: any): void {
    const key = searchKey.target.value;
    this.setSearchKey(key);
  }

  // private methods
  private setSearchKey(key: any): void {
    this.searchKey = key;
  }

  onFormSubmit($event: any): void {
    $event.preventDefault();
    this.key.emit(this.searchKey);
  }
}
