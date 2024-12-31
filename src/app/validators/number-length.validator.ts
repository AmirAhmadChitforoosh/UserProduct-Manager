import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numberLength(length:number):ValidatorFn{
  return (control:AbstractControl):null|ValidationErrors =>{
    if(!control.value || isNaN(control.value)){
      return null;
    }

    if(control.value.length > length || control.value.length < length){
      return {validationError: {value: "national code must have exactly ${length} digits"}};
    }
    return null;

  }
}
