
import { Todo } from "../../todo-list/todo-list.component";
import { TodoActions, TodosUnion } from "../actions/todo.actions";

const date: number = Date.now();

export interface State {
    apiUrl: string;
    updatedAt: number;
    todoItems: Todo[]
}

const initialState: State = {
    updatedAt: date,
    todoItems: [],
    apiUrl: 'https://jsonplaceholder.typicode.com/todos',
}

const updateTodoItem = (state = initialState, todo: Todo) => {
    let currentItem = state.todoItems.filter(i => i.id === todo.id);
    currentItem[0] = todo;
    return state.todoItems;
}

export function todoReducer(
    state: State = initialState,
    action: TodosUnion
): State {
    switch (action.type) {
        case TodoActions.updateTodo:
            return {
                ...state,
                todoItems: updateTodoItem(state, action.payload)
            }
        case TodoActions.loadTodos:
            return {
                ...state,
                todoItems: action.payload
            }
        case TodoActions.addTodo:
            return {
                ...state,
                todoItems: state.todoItems.concat(action.payload)
            }
        case TodoActions.updatedTime:
            return {
                ...state,
                updatedAt: action.payload
            }
        case TodoActions.removeTodo:
            return {
                ...state,
                todoItems: state.todoItems.filter(item => item.id !== action.id)
            }
        default:
            return state;
    }
}
