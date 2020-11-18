import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public password = '';
  private includeLetters: boolean;
  private includeNumbers: boolean;
  private includeSymbols: boolean;
  private length: number;

  onButtonClick(): void {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }

  useLetter(): void {
    this.includeLetters = !this.includeLetters;
  }

  useNumber(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  useSymbol(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  setLength(length): void {
    const value = +length.target.value;
    if (!isNaN(value)) {
      this.length = value;
    } else {
      alert('Please enter valid number');
    }
  }

  onMinimumOneSelected(): boolean {
    return (this.includeSymbols || this.includeNumbers || this.includeLetters) && (+this.length > 0);
  }
}
