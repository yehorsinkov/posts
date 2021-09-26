import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CustomFormDirective } from './custom-form.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormCheckboxComponent } from './controls/form-checkbox/form-checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from '../core/other/material-module';
import { MatNativeDateModule } from '@angular/material/core';
import { FormInputComponent } from './controls/form-input/form-input.component';
import { FormTextareaComponent } from './controls/form-textarea/form-textarea.component';

@NgModule({
  declarations: [
    CustomFormComponent,
    CustomFormDirective,
    FormCheckboxComponent,
    FormInputComponent,
    FormTextareaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
  // entryComponents: [
  //   FormCheckboxComponent
  // ]
})
export class CustomFormModule { }
