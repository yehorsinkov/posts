import { Directive } from '@angular/core';
import { AnimalService } from './services/animal-service.service';
import { zoo } from './zoo';

@Directive({
  selector: '[appMonkey]',
  providers: [
    {
      provide: zoo,
      useValue: {
        emoji: '🐒'
      },
      multi: true
    },
  ]
})
export class MonkeyDirective {
  constructor() { }
}
