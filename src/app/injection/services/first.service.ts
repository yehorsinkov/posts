import { Injectable } from '@angular/core';

@Injectable()
export class FirstService {

  constructor() { }

  public getFirstStatus() : string {
    return 'First Service is working!!!';
  }

  public info(msg: string): string {
    return `Info: ${msg}`;
  }
}
