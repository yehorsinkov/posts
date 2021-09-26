import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal-service.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.sass']
})
export class GrandChildComponent implements OnInit {

  constructor(public animalService: AnimalService) { }

  ngOnInit(): void {
  }

}
