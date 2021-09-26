import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { RemoveTodo } from '../state/actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent {
  @Input() todo: any;
  @Output() counterChanged = new EventEmitter<number>();

  constructor(private store: Store) {  }

  public removeTodo(id: number): void {
    //with EventEmitter
    // this.changeTodoCounter();
    //
    //withOUT EventEmitter and use STORE
    this.store.dispatch(new RemoveTodo(id));
  }

  private changeTodoCounter(): void {
    this.counterChanged.emit();
  }

}
