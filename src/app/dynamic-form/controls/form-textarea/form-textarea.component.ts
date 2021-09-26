import { Component, OnInit } from '@angular/core';
import { FormBaseField } from '../form-base-field/form-base-field';

@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.sass']
})
export class FormTextareaComponent extends FormBaseField<any>  implements OnInit {


  ngOnInit(): void {
  }

}
