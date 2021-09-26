import { Action, createAction, props } from '@ngrx/store';
import { Todo } from '../../todo-list/todo-list.component';


export const TODO_KEY = 'Todo';

export enum TodoActions {
    loadTodos = '[Todo] load Todos',
    addTodo = '[Todo] add Todo',
    removeTodo = '[Todo] remove Todo',
    updateTodo = '[Todo] update todo',
    updatedTime = '[Todo] change time update',
}

export class LoadTodos implements Action {
    readonly type = TodoActions.loadTodos;

    constructor(public payload: Todo[] ) {}
}

export class AddTodo implements Action {
    readonly type = TodoActions.addTodo

    constructor(public payload: Todo ) {}
}

export class UpdateTodo implements Action {
    readonly type = TodoActions.updateTodo

    constructor(public payload: Todo ) {}
}

export class UpdatedTime implements Action {
    readonly type = TodoActions.updatedTime
    constructor(public payload: number ) {}
}

export class RemoveTodo implements Action {
    readonly type = TodoActions.removeTodo
    constructor(public id: number ) {}
}

export type TodosUnion = 
    | LoadTodos
    | AddTodo
    | UpdatedTime
    | UpdateTodo
    | RemoveTodo
    ;