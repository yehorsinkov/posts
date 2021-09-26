import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CustomFormModule } from './dynamic-form/custom-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users/users.module';
import { NotFoundUserComponent } from './pages/not-found-user/not-found-user.component';
import { NotFoundTodoComponent } from './pages/not-found-todo/not-found-todo.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GoogleMapsModule } from './google-maps/google-maps.module';
import { TodoEffects } from './todo/state/effects/todo.effects';
import { TodoModule } from './todo/todo.module';
import { HighchartsModule } from './highcharts/highcharts.module';
import { FirstService } from './injection/services/first.service';
import { SecondService } from './injection/services/second.service';
import { ThirdService } from './injection/services/third.service';
import { PAGE_CONFIG } from './injection/config/page-config';
import { FactoryService } from './injection/services/factory.service';
import { GreetingService } from './injection/services/greeting.service';
import { EmojiModule } from './emoji/emoji.module';
import { InjectionModule } from './injection/injection.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NotFoundUserComponent,
    NotFoundTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TodoModule,
    AboutModule,
    CustomFormModule,
    UsersModule,
    EffectsModule.forRoot([TodoEffects]),
    StoreModule.forRoot({}, {}),
    GoogleMapsModule,
    HighchartsModule,
    InjectionModule,
    EmojiModule,
  ],
  providers: [
    {
      provide: ThirdService,
      useClass: ThirdService
      // useValue: { info: (msg: string) => {}}
    },
    FactoryService,
    FirstService,
    // {
    //   provide: FirstService,
    //   useClass: ThirdService
    // },
    {
      provide: PAGE_CONFIG,
      useValue: { title: 'Тестовый PAGE_CONFIG 123'} 
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
