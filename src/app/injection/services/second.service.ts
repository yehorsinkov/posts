import { Injectable } from '@angular/core';
import { FirstService } from './first.service';

@Injectable()
export class SecondService extends FirstService {

  public getSecondInfo(): string {
    return 'On second way!'
  }

  public getSumInfo(): string {
    return `Second + ${super.getFirstStatus()}`
  }
}
