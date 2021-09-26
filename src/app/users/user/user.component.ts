import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent {
  @Input() user: User;
  constructor(private router: Router) { }

  public toCard(id: number): void {
    this.router.navigate(['users', id]);
  }
}
