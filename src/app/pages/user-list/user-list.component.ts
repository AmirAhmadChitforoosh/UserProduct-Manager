import { Component, CSP_NONCE, OnInit } from '@angular/core';
import { BackEndService } from '../../services/backendservice.service';
import { RolePipe } from '../../pipes/role.pipe';
import { User } from '../../model/user.model';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RolePipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  currentUser: any;

  constructor(
    private backEndService: BackEndService,
    private storage: StorageService,
    private router: Router
  ) {
    this.users = this.storage.getUsers();
  }

  ngOnInit() {
    this.backEndService.currentUser().then((resolve) => {
      this.currentUser = resolve;
    });
  }

  editUser(event: Event) {
    const buttonElement = event.target as HTMLButtonElement;
    const parentDiv = buttonElement.parentElement?.parentElement as HTMLElement;
    const id = parseInt(parentDiv.id.replace(/\D/g, ''), 10);
    this.router.navigate(['/edit-user'], { queryParams: { id: id } });
  }

  deleteUser(event: Event) {
    const buttonElement = event.target as HTMLButtonElement;
    const parentDiv = buttonElement.parentElement?.parentElement as HTMLElement;
    const id = parseInt(parentDiv.id.replace(/\D/g, ''), 10);
    this.backEndService.deleteUser(id).subscribe(()=>{
      this.backEndService.allUsers().subscribe((d)=>{
        console.log(d);
        this.storage.setUsers(Object.values(d));
        this.users = this.storage.getUsers();
      }
      )
    });
  }
}
