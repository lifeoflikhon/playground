import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.scss']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'Mehedi', age: 23, job: 'Designer'},
    {name: 'Chitto', age: 26, job: 'Developer'},
    {name: 'Sefat', age: 21, job: 'Developer'},
    {name: 'Hasib', age: 24, job: 'Developer'},
  ];

  headers = [
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Designation'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
