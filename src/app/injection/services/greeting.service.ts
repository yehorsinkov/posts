import { Injectable } from '@angular/core';
import { FactoryService } from './factory.service';
import { FirstService } from './first.service';

@Injectable()
export class GreetingService {

  constructor(private fs: FirstService, private name: Object) {
    this.fs.info(name + 'user GreetingService');
  }

  public getMessage(): string {
    return `Возвращено сообщение от ${this.name}`;
  }
}
