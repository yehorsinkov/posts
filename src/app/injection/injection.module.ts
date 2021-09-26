import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first/first.component';
import { InjectionComponent } from './injection.component';
import { InjectionRoutingModule } from './injection-routing.module';
import { FirstService } from './services/first.service';
import { SecondService } from './services/second.service';
import { FactoryService } from './services/factory.service';
import { GreetingService } from './services/greeting.service';

@NgModule({
  declarations: [
    FirstComponent,
    InjectionComponent
  ],
  imports: [
    CommonModule,
    InjectionRoutingModule,
  ],
  providers: [
    FactoryService,
    {
      provide: GreetingService,
      useFactory: (
        fs: FirstService,
        factory: FactoryService
      ) => new GreetingService(fs, factory.getUser().name),
      deps: [FirstService, FactoryService]
    }
  ]
})
export class InjectionModule { }
