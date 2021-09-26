import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { TodoActions, UpdatedTime } from '../actions/todo.actions';

@Injectable()
export class TodoEffects {
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(TodoActions.addTodo, TodoActions.removeTodo),
    map(() => new UpdatedTime(Date.now()))
  ));

  constructor(private actions$: Actions) {}
}
