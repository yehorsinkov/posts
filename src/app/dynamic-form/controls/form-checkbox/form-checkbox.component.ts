import { Component, OnInit } from '@angular/core';
import { FormBaseField } from '../form-base-field/form-base-field';

@Component({
  selector: 'app-form-checkbox',
  templateUrl: './form-checkbox.component.html',
  styleUrls: ['./form-checkbox.component.sass']
})
export class FormCheckboxComponent extends FormBaseField<any> implements OnInit {
  public ngOnInit(): void {
		if (!this.config.value) {
			this.config.value = false;
			this.group.patchValue({ [this.config.code]: this.config.value });
		}
	}
}