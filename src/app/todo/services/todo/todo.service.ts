import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AddTodo, LoadTodos } from 'src/app/todo/state/actions/todo.actions';
import { getApiUrl } from 'src/app/todo/state/store';
import { Todo } from '../../todo-list/todo-list.component';
import { TodoModule } from '../../todo.module';

@Injectable()
// @Injectable({
//   providedIn: TodoModule
// })
export class TodoService {
  public loading$: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false);

  constructor(
    private http: HttpClient,
    private store: Store,
  ) { }

  private getApiUrl(): Observable<string> {
    const a =  this.store.pipe(select(getApiUrl));
    debugger;
    return a
  }

  public getAllTodo(): void {
    const query = '?_limit=5';
    this.loading$.next(true);
    this.getApiUrl()
      .pipe(switchMap(API_URL => this.http.get<Todo[]>(`${API_URL}${query}`)))
      .subscribe((data: Todo[]) => {
        this.store.dispatch(new LoadTodos(data));
        this.loading$.next(false);
      });
  }

  public addTodo(todo: Todo): void {
    this.loading$.next(true);
    const data = {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
    this.getApiUrl()
      .pipe(switchMap(API_URL => this.http.post(`${API_URL}`, data)))
      .subscribe((response: any) => {
        const newTodo = response ? JSON.parse(response.body) : null;
        this.store.dispatch(new AddTodo(newTodo));
        this.loading$.next(false);
      });
  }
}
