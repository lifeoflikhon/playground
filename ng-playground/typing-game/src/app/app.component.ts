import {Component} from '@angular/core';
import {lorem} from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.sentence();
  userText = '';
  textMatched: boolean;
  wellDone: boolean;

  setUserText($event: any): void {
    this.userText = $event.target.value;
    this.textMatched = this.userText === this.randomText;
  }

  compareText(randomLetter: string, userLetter: string): string {
    if (!userLetter) {
      return 'has-text-dark';
    }

    if (randomLetter === userLetter) {
      return 'has-text-success';
    }

    if (randomLetter !== userLetter) {
      return 'has-text-danger';
    }
  }
}
