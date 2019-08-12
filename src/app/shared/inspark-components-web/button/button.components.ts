import { Component, Input, Output, EventEmitter } from '@angular/core';
import '@inspark/components-web/src/button/ids-button.scss';

@Component({
  selector: 'app-inspark-button-component',
  template: `
    <button class="c-btn" (click)="onClick.emit($event)">{{ text }}</button>
  `,
  styles: [],
})
export default class ButtonComponent {
  @Input()
  text = '';

  @Output()
  onClick = new EventEmitter<any>();
}
