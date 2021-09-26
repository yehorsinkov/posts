import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundTodoComponent } from 'src/app/pages/not-found-todo/not-found-todo.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: '**', component: NotFoundTodoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule { }
