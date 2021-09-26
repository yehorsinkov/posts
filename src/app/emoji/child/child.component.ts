import { Component, Inject, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal-service.service';
import { zoo } from '../zoo';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass'],
  // providers: [{
  viewProviders: [
    {
      provide: zoo,
      useValue: {
        emoji: '🐻'
      },
      multi: true
    },
    {
      provide: AnimalService,
      useValue: {
        emoji: '🐻'
      },
      // multi: true
    }
  ]
})
export class ChildComponent implements OnInit {

  constructor(
    public animalService: AnimalService,
    @Inject(zoo) public zooList: AnimalService[],
  ) { }

  ngOnInit(): void {}
}
