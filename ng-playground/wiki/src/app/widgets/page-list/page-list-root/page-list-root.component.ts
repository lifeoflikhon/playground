import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-list-root',
  templateUrl: './page-list-root.component.html',
  styleUrls: ['./page-list-root.component.scss']
})
export class PageListRootComponent implements OnInit {
  @Input() searchResultPages: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
