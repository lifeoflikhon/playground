import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistices',
  templateUrl: './statistices.component.html',
  styleUrls: ['./statistices.component.scss']
})
export class StatisticesComponent implements OnInit {
  @Input() data: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
