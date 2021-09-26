import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CustomFormComponent } from './dynamic-form/custom-form/custom-form.component';
import { UsersModule } from './users/users.module';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { TodoModule } from './todo/todo.module';
import { HighchartsModule } from './highcharts/highcharts.module';
import { InjectionModule } from './injection/injection.module';
import { EmojiModule } from './emoji/emoji.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'about'
  },
  { path: 'about', component: AboutComponent },
  { 
    path: 'todo',
    loadChildren: (): Promise<TodoModule> =>
			import('./todo/todo.module').then(m => m.TodoModule)
  },
  { path: 'form', component: CustomFormComponent },
  { 
    path: 'users',
    loadChildren: (): Promise<UsersModule> =>
			import('./users/users.module').then(m => m.UsersModule)
  },
  { 
    path: 'google-maps',
    loadChildren: (): Promise<GoogleMapsModule> =>
			import('./google-maps/google-maps.module').then(m => m.GoogleMapsModule)
  },
  { 
    path: 'hightcharts',
    loadChildren: (): Promise<HighchartsModule> =>
			import('./highcharts/highcharts.module').then(m => m.HighchartsModule)
  },
  { 
    path: 'injection',
    loadChildren: (): Promise<InjectionModule> =>
			import('./injection/injection.module').then(m => m.InjectionModule)
  },
  { 
    path: 'emoji',
    loadChildren: (): Promise<EmojiModule> =>
			import('./emoji/emoji.module').then(m => m.EmojiModule)
  },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
