import { Injectable } from '@angular/core';
import { FirstService } from './first.service';
import { SecondService } from './second.service';

@Injectable()
export class ThirdService extends FirstService {

  constructor() {
    super();
    console.log(this.info('I have created'));
  }

  public info(msg: string): string {
    return super.info(msg);
  }
}
