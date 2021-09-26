import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { InjectionComponent } from './injection.component';


const routes: Routes = [
  { path: '', component: InjectionComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InjectionRoutingModule { }
