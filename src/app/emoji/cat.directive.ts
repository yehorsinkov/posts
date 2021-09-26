import { Directive } from '@angular/core';
import { AnimalService } from './services/animal-service.service';
import { zoo } from './zoo';

@Directive({
  selector: '[appCat]',
  providers: [
    {
      provide: zoo,
      useValue: {
        emoji: '🐱'
      },
      multi: true
    },
  ],
})
export class CatDirective {

  constructor() { }

}
