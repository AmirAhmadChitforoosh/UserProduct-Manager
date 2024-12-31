import { BackEndService } from './../../services/backendservice.service';
import { Component } from '@angular/core';

import { User } from '../../model/user.model';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { FormComponent } from '../../entities/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [FormComponent, ReactiveFormsModule, FormsModule, FormComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  private _newUser: User | null = null;
  currentUser: User | null = null;

  get newUser(): User | null {
    return this._newUser;
  }

  set newUser(user: User) {
    this._newUser = user;
    this.baackendService.createUser(user).subscribe((d) => {
      const users = this.storage.getUsers();
      const addedUser = d as User;
      console.log(addedUser);
      users.push(addedUser);
      this.storage.setUsers(users);
      this.router.navigate(['/user-list']);
    });
  }

  constructor(
    private baackendService: BackEndService,
    private storage: StorageService,
    private router: Router
  ) {
    // Checks if the user has access to the add user link.
    this.baackendService.currentUser().then((resolve) => {
      this.currentUser = resolve as User;

      if (resolve.role !== 1) {
        this.router.navigate(['/user-list']);
      }
    });
  }
}
