import { Component, NgModule } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { LoginProp } from '../../model/loginProp.model';
import { BackEndService } from '../../services/backendservice.service';
import { User } from '../../model/user.model';
import { StorageService } from '../../services/storage.service';
import { InvalidInput } from '../../directives/invalid-input.directive';

@Component({
  selector: 'login-page',
  imports: [RouterModule, FormsModule, ReactiveFormsModule , InvalidInput],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  currentUser: User | null = null;

  buttonClicked:boolean = false;
  userNameNotFound:boolean = false;

  formGroup: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private router: Router,
    private backEndService: BackEndService,
    private storage: StorageService,

  ) {

  }




  onSubmit() {

    this.buttonClicked = true;

    const { username, password } = this.formGroup.value;


    if (this.formGroup.invalid) {

      return;
    }

    const loginProperties: LoginProp = {
      username: username,
      password: password,
    };

    this.backEndService.logIn(loginProperties).then(() => {

        this.router.navigate(['/user'], {
          queryParams: { username: loginProperties.username },
        });
        this.backEndService.currentUser().then((resolve) => {
          this.currentUser = resolve;
          if (this.currentUser?.role === 1) {
            this.backEndService.allUsers().subscribe((d) => {
              this.storage.clearUsers();
              this.storage.setUsers(Object.values(d));
              console.log(this.storage.getUsers());
            });
          }
        });
        this.backEndService.getProducts().subscribe((d)=>{
          this.storage.clearProducts();
          this.storage.setProducts(Object.values(d));
          console.log(this.storage.getProducts());
        })

    }).catch(()=>{
      this.buttonClicked = false;
      this.userNameNotFound = true;

    });
  }
}
