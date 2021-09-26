import { Type } from "@angular/core";
import { FormFieldTypes } from "src/app/core/mockData/form-field-types";
import { FormCheckboxComponent } from "./controls/form-checkbox/form-checkbox.component";
import { FormInputComponent } from "./controls/form-input/form-input.component";
import { FormTextareaComponent } from "./controls/form-textarea/form-textarea.component";

export const components: { [type: string]: Type<any> } = {
    [FormFieldTypes.input]: FormInputComponent,
	[FormFieldTypes.textarea]: FormTextareaComponent,
	[FormFieldTypes.checkbox]: FormCheckboxComponent,
	// [FormFieldTypes.select]: FormSelectComponent,
	// [FormFieldTypes.button]: FormButtonComponent,
}