import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {
  public usersList: User[];

  constructor(private userService: UserService) { }

  public ngOnInit(): void {
    this.userService.getAllUsers()
      .subscribe(data => this.usersList = data);
  }
}
