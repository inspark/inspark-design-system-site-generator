import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export default class LinkComponent implements OnInit {
  @Input()
  text = '';
  class = '';
  disabled = '';

  @Output()
  onClick = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}
}

