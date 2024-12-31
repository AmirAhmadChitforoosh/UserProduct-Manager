import { Component, EventEmitter, Input, Output, Type } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, MinLengthValidator, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { Product } from '../../model/product.model';
import { User } from '../../model/user.model';
import { BinaryValidator } from '../../validators/binary.validator';
import { InvalidInput } from '../../directives/invalid-input.directive';
import { numberLength } from '../../validators/number-length.validator';
import { StorageValueExist } from '../../validators/storage-value-exist.validator';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-form',
  imports: [FormsModule , ReactiveFormsModule , InvalidInput],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  // Either is Product or User
  @Input()
  formType:string = '';

  formControls:any;

  formControlConfig: { [key: string]: string } = {};

  formGroup:FormGroup = new FormGroup({
  });

  ngOnChanges(): void {



    if(this.formType === 'product'){
      this.addFormControl('name' , 'text' , [Validators.required]);
      this.addFormControl('code' , 'number' , [Validators.required ,  StorageValueExist('code' , 'product' , this.storage)]);
      this.addFormControl('weight' , 'number' , [Validators.required]);
    }
    if(this.formType === 'user'){
      this.addFormControl('firstName' , 'text' , [Validators.required]);
      this.addFormControl('lastName' , 'text' , [Validators.required]);
      this.addFormControl('role' , 'number' , [Validators.required , BinaryValidator()]);
      this.addFormControl('nationalCode' , 'number' , [Validators.required , numberLength(10) , StorageValueExist('nationalCode' , 'user' , this.storage)]);
      this.addFormControl('mobile' , 'number' , [Validators.required ,  StorageValueExist('mobile' , 'user' , this.storage)] );
      this.addFormControl('username' , 'text' , [Validators.required ,  StorageValueExist('username' , 'user' , this.storage)]);
      this.addFormControl('password' , 'text' , [Validators.required]);
    }
    if(this.formType === ''){
      console.log("form type is ''");
    }
    this.formControls = Object.keys(this.formGroup.controls);


  }



  addFormControl(controlName:string , inputType:string , validators:Validators|ValidatorFn[]){
    this.formGroup.addControl(controlName ,new FormControl(null , validators));
    this.formControlConfig[controlName] = inputType;
  }


  @Output()
  formChange = new EventEmitter<any>;

  onSubmit(){
    if(this.formGroup.invalid){

      return
    }
    if(this.formType === 'user'){
      this.formChange.emit(this.formGroup.value as User);
    }
    if(this.formType === 'product'){
      this.formChange.emit(this.formGroup.value as Product);
    }
  }

  constructor(private storage:StorageService){

  }




}
