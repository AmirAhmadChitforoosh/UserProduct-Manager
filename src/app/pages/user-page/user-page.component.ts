import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user.model';
import { NavbarComponent } from '../../entities/navbar/navbar.component';
import { NavbarProp } from '../../model/navbarProp.model';
import { BackEndService } from '../../services/backendservice.service';

@Component({
  selector: 'app-user-page',
  imports: [NavbarComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css',
})
export class UserPageComponent implements OnInit {
  user: any;

  navbarProperties: NavbarProp[] = [];
  constructor(
    private route: ActivatedRoute,
    private backEndService: BackEndService
  ) {}

  addNavbarFunction() {
    if (this.user.role === 1) {
      this.navbarProperties.push({
        name: 'Add User',
        link: 'add-user',
      });
    }

    this.navbarProperties.push({
      name: 'User List',
      link: 'user-list',
    });

    this.navbarProperties.push({
      name: 'Product List',
      link: 'product-list',
    });

    this.navbarProperties.push({
      name: 'Add Product',
      link: 'add-product'
    })
  }

  ngOnInit(): void {
    this.backEndService.currentUser().then((user) => {
      this.user = user;
      this.addNavbarFunction();
    });
  }
}
