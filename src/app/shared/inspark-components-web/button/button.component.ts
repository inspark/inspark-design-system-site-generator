import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inspark-button-component',
  template: `
    <button class="c-btn {{ class }}" (state)="state" (click)="onClick.emit($event)">{{ text }} {{ state }}</button>
  `,
  styleUrls: ['./button.component.scss'],
})
export default class ButtonComponent implements OnInit {
  @Input()
  text = '';
  class = '';
  state = '';

  @Output()
  onClick = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
}
