import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from '../services/animal-service.service';
import { zoo } from '../zoo';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AnimalService,
      useValue: {
        emoji: '🦜'
      },
      // multi: true
    }
  ],
})
export class ParrotModule { }
