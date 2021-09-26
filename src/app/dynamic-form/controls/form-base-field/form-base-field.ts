import { FormGroup } from '@angular/forms';

export class FormBaseField<T> {
	public group: FormGroup;
	public config: T;
}