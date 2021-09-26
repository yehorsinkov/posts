import { Component, OnInit } from '@angular/core';
import { FormBaseField } from '../form-base-field/form-base-field';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.sass']
})
export class FormInputComponent extends FormBaseField<any> implements OnInit {

  ngOnInit(): void {
  }

}
