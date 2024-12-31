import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function BinaryValidator():ValidatorFn{
  return (control:AbstractControl):ValidationErrors|null => {
    if(control.value == 'null' || isNaN(control.value)){
      return null;
    }

    return control.value == 0 || control.value == 1 ? null: { isBinary: {value: 'The User Role must be 0 or 1'}};
  }
}
