import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value: 22, label: 'Users'},
    {value: 900, label: 'Revineue'},
    {value: 50, label: 'Reviews'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
