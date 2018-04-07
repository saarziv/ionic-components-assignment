import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private tapsCount:number = 0;
  private pressCount:number = 0;

  onTap(): void {
    this.tapsCount++;
  }

  onPress(): void {
    this.pressCount++;
  }

  isCorrectClicking():boolean {
    if(this.tapsCount === 2 && this.pressCount === 4) {
      return true
    }
    return false
  }

  resetAll(): void {
    this.resetPresses();
    this.resetTaps();
  }

  resetPresses(): void {
    this.pressCount = 0;
  }

  resetTaps(): void {
    this.tapsCount = 0;
  }

}
