import { Injectable } from '@angular/core';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class FactoryService {
  public getUser(): User {
    return {
      name: 'Maxdsadasdas',
      age: 30
    }
  }
}
