import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DemoMaterialModule } from '../core/other/material-module';
import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    UsersListComponent,
    UserComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }
