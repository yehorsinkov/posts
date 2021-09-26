import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<User[]> {
    const url = 'https://jsonplaceholder.typicode.com/users?_limit=8';
    return this.http.get<User[]>(url);
  }

  public getUserById(id: number): Observable<User> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<User>(`${url}/${id}`);
  }
}
