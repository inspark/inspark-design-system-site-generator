import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inspark-button-component',
  template: `
    <button class="c-btn {{ class }}" 
            [attr.disabled]="disabled ? '' : null"
            (click)="onClick.emit($event)" 
            style="margin-right: 0;">{{ text }}</button>
  `,
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent implements OnInit {
  @Input()
  text = '';
  class = '';
  disabled = '';

  @Output()
  onClick = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
}
