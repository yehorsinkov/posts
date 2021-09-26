import { Injectable } from '@angular/core';
import { FactoryService } from './factory.service';
import { FirstService } from './first.service';
import { GreetingService } from './greeting.service';

@Injectable({
  providedIn: 'root',
  useFactory: (
    fs: FirstService,
    factory: FactoryService
  ) => new AnotherGreetingService(fs, `Mr. ${factory.getUser().name}`),
  deps: [FirstService, FactoryService]
})
export class AnotherGreetingService {

  constructor(private fs: FirstService, private name: Object) {
    this.fs.info(name + 'user GreetingService');
  }

  public getMessage(): string {
    return `Возвращено сообщение от ${this.name}`;
  }
}
