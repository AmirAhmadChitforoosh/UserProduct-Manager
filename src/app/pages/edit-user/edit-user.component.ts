import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user.model';
import { BackEndService } from '../../services/backendservice.service';
import { StorageService } from '../../services/storage.service';
import { FormComponent } from '../../entities/form/form.component';

@Component({
  selector: 'app-edit-user',
  imports: [FormComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css',
})
export class EditUserComponent {
  private _newUser: User | null = null;
  currentUser: User | null = null;
  userId: number | null = null;
  get newUser(): User | null {
    return this._newUser;
  }

  set newUser(user: User) {
    user.id = this.userId;
    this._newUser = user;
    if (this._newUser)
      this.baackendService.editUser(user).subscribe((d) => {
        const users = this.storage.getUsers();

        for (let i = 0; i < users.length; i++) {
          if (users[i].id == user.id) {
            users[i] = user; // This will update the object in the array
          }
        }
        console.log(user);
        console.log(users);
        this.storage.setUsers(users);
        this.router.navigate(['/user-list']);
      });
  }

  constructor(
    private baackendService: BackEndService,
    private storage: StorageService,
    private router: Router,
    private routeParam: ActivatedRoute
  ) {
    this.baackendService.currentUser().then((resolve) => {
      this.currentUser = resolve as User;
      console.log(resolve.role);
      if (resolve.role !== 1) {
        this.router.navigate(['/user-list']);
      }
    });
  }

  ngOnInit(): void {
    this.routeParam.queryParams.subscribe((param) => {
      this.userId = param['id'];
    });
  }
}
