import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector:'app-buttons',
  templateUrl:"buttons.html"
})

export class ButtonsComponent {
  @Output() resetAll = new EventEmitter();
  @Output() resetTaps = new EventEmitter();
  @Output() resetPresses = new EventEmitter();

  resetAllClick(){
    this.resetAll.emit();
  }
  resetTapsClick() {
    this.resetTaps.emit();
  }
  resetPressesClick() {
    this.resetPresses.emit();
  }
}
