import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';
  date = '';

  onNameChange($event: any): void {
    this.name = $event.target.value;
  }

  onDateChange($event: any): void {
    this.date = $event.target.value;
  }
}
