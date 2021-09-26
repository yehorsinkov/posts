import { Component, OnInit } from '@angular/core';
import { AnimalService } from './services/animal-service.service';

@Component({
  selector: 'app-emoji',
  templateUrl: './emoji.component.html',
  styleUrls: ['./emoji.component.sass']
})
export class EmojiComponent implements OnInit {

  constructor(public animalService: AnimalService) { }

  ngOnInit(): void {}

}
