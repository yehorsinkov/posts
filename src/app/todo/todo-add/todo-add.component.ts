import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { interval, Observable, of } from 'rxjs';
import { delay, map, mergeMap, reduce, switchMap, take, takeLast, tap } from 'rxjs/operators';
import { TodoService } from '../services/todo/todo.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-add',
  templateUrl: 'todo-add.component.html',
  styleUrls: ['todo-add.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent implements OnInit {
  public form: FormGroup = new FormGroup({
      "newTodoTitle": new FormControl("", Validators.required)
  });
  
  constructor(
    private todoService: TodoService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(switchMap((form: any) => of(form.newTodoTitle).pipe(delay(1000))))
      .subscribe(value => console.log('SWITCH MAP RESULT: ', value));

    this.form.statusChanges.subscribe((status) => {
      console.log('Form status: ', status)
    });
  }

  private setTimerHandler (str: string): Observable<any> {
    return of(str).pipe(delay(1000));
  }

  private getNewTodo(): Todo {
    const userId = Date.now();
    const title = this.form.controls['newTodoTitle'].value;
    const completed = true;
    const id = userId - 1000000000000;
    return { userId, title, id, completed };
  }

  private setDefaultControlsValue(): void {
    this.form.controls['newTodoTitle'].setValue('');
  }

  public addTodoItem(): void {
    const newTodo = this.getNewTodo();
    this.todoService.addTodo(newTodo);
    this.form.reset(); // to NULL
  }
}
