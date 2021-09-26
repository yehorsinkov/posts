import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomFormMockDataFields } from 'src/app/core/mockData/custom-form-mock-data';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.sass']
})
export class CustomFormComponent implements OnInit {
  public form: FormGroup;
  public fields: any = CustomFormMockDataFields;


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(
    private fb: FormBuilder,
  ) { 
    this._createForm()
  }
  
  ngOnInit(): void {
  }

  private _createForm() {
    this.form = this._createGroup();
  }

  private _createGroup(): FormGroup {
		const group = this.fb.group({});
		this.fields.forEach((field: any) => {
      const control = new FormControl(field.value)
      group.addControl(field.code, control);
    });
		return group;
	}

  public onSubmit(): void {
    console.log(this.form.getRawValue());
  }
}
