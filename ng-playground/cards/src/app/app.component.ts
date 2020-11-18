import {Component, OnInit} from '@angular/core';
import {Post} from "./models/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: Post[];

  ngOnInit(): void {
    this.posts = [
      {
        name: 'Neat Tree',
        author: '@nature',
        content: '',
        image: {name: 'tree'}
      },
      {
        name: 'Snowy Mountain',
        author: '@nature',
        content: '',
        image: {name: 'mountain'}
      },
      {
        name: 'Mountain Biking',
        author: '@nature',
        content: '',
        image: {name: 'biking'}
      }
    ];
  }
}
