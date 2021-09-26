import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.sass']
})
export class TodoCounterComponent {
  @Input() counterValue: number = 0;
  constructor() { }
}
