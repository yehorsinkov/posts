import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoCounterComponent } from './todo-counter/todo-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { TODO_KEY } from './state/actions/todo.actions';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/effects/todo.effects';
import { FontSizeDirective } from './font-size.directive';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import * as fromAuth from '../todo/state/reducers/todo.reducer'
import { TodoService } from './services/todo/todo.service';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoAddComponent,
    TodoItemComponent,
    TodoCounterComponent,
    TodoComponent,
    FontSizeDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TodoRoutingModule,
    EffectsModule.forFeature([TodoEffects]),
    StoreModule.forFeature(TODO_KEY, fromAuth.todoReducer),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [TodoService]
})
export class TodoModule { }
