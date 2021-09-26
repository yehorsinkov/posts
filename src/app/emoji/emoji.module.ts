import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiComponent } from './emoji.component';
import { EmojiRoutingModule } from './emoji-routing.module';
import { AnimalService } from './services/animal-service.service';
import { ParrotModule } from './parrot/parrot.module';
import { OwlModule } from './owl/owl.module';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { MonkeyDirective } from './monkey.directive';
import { CatDirective } from './cat.directive';
import { zoo } from './zoo';



@NgModule({
  declarations: [
    EmojiComponent,
    ChildComponent,
    GrandChildComponent,
    MonkeyDirective,
    CatDirective,
  ],
  imports: [
    CommonModule,
    EmojiRoutingModule,
    ParrotModule,
    OwlModule,
  ],
  providers: [
    {
      provide: zoo,
      useValue: {
        emoji: '🦇'
      },
      multi: true
    },
  ],
})
export class EmojiModule { }
