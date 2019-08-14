import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inspark-button-component',
  template: `
    <button class="c-btn {{ class }}" (click)="onClick.emit($event)">{{ text }}</button>
  `,
  styleUrls: [
    './button.components.scss'
  ],
})
export default class ButtonComponent {
  @Input()
  text = '';
  class = '';

  @Output()
  onClick = new EventEmitter<any>();
}
