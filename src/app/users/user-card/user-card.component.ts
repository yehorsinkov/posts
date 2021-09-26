import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.sass']
})
export class UserCardComponent implements OnInit {
  public user: User;
  // private _router$ = new Subject();

  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  public ngOnInit(): void {
    debugger;
    this.activateRoute.paramMap
      .pipe(
        switchMap(params => params.getAll('id')),
        switchMap(id => this.userService.getUserById(+id)))
        // takeUntil(this._router$)
      .subscribe(user => this.user = user);
  }
}
