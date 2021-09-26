import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoService } from '../services/todo/todo.service';
import { UpdateTodo } from '../state/actions/todo.actions';
import { getTodoItemsSelector, getUpdatedAtSelector } from '../state/store';

export interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  public updatedAt$ = this.store.select(getUpdatedAtSelector);
  public todoItems$ = this.store.select(getTodoItemsSelector);
  public loading$ = this.todoService.loading$;
  public counter = 0;
  public elementStyles: any = {
    color: 'red',
    opacity: 0.5,
  }
  
  constructor(
    private todoService: TodoService,
    private store: Store
  ) { }
  ngOnInit(): void {
    this.todoService.getAllTodo();
    this.todoItems$.subscribe(data => this.counter = data.length);
  }
  
  public updateTodo(todo: Todo): void {
    this.store.dispatch(new UpdateTodo(todo));
  }

  
  // with EventEmitter do method here
  // public decrementCounter(): void {
  //   this.counter--;
  // }
  //  public removeTodo(id: number): void {
  //   this.store.dispatch(new RemoveTodo(id));
  // }
}
