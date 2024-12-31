import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { StorageService } from "../services/storage.service";
import { User } from "../model/user.model";
import { Product } from "../model/product.model";
export function StorageValueExist(value:string , valueType:string , storage:StorageService):ValidatorFn{
  return (control: AbstractControl): null| ValidationErrors =>{
    let values: User[] | Product[]| null = null;
    if(valueType === 'user'){
      values = storage.getUsers();

    }
    if(valueType === 'product'){
      values = storage.getProducts();
    }

    if(!control){
      return {error: {message: 'required'}};
    }

    if(!values){
      return null;
    }

    for(const element of values){
      if((element as any)[value] == control.value){
        return {error: {message: "this ${value} exist "}};
      }
    }
    return null;
  }



}
