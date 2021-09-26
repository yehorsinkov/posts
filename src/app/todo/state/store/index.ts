import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TODO_KEY } from "../actions/todo.actions";
import { State } from "../reducers/todo.reducer";

export const todoFeature: any = createFeatureSelector(TODO_KEY);

export const getUpdatedAtSelector = createSelector(todoFeature, (state: State) => state.updatedAt);
export const getTodoItemsSelector = createSelector(todoFeature, (state: State) => state.todoItems);
export const getApiUrl = createSelector(todoFeature, (state: State) => state.apiUrl);
