import { FormFieldTypes } from "./form-field-types";

export const CustomFormMockDataFields = [
    {
        code: 'isAdded',
        type: FormFieldTypes.checkbox,
        placeholder: 'Checkbox',
        value: true
    },
    {
        code: 'Name',
        type: FormFieldTypes.input,
        placeholder: 'lorem input',
        value: 'input 1 value'
    },
    {
        code: 'SecondName',
        type: FormFieldTypes.input,
        placeholder: 'lorem declaration',
        value: 'declaration of inde'
    },
    {
        code: 'comment',
        type: FormFieldTypes.textarea,
        placeholder: 'lorem textarea',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum!'
    },
]