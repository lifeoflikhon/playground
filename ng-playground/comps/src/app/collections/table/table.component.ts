import {Component, Input, OnInit} from '@angular/core';

class Header {
  key: string;
  label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() records: any[];
  @Input() headers: Header[];
  constructor() { }

  ngOnInit(): void {
  }

}
