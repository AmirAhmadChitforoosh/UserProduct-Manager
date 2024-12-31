import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

export const routes: Routes = [
    {
        path:"",
        component: HomePageComponent
    },
    {
        path: "login",
        component: LoginPageComponent
    },
    {
        path: "user",
        component: UserPageComponent
    },
    {
        path:"add-user",
        component:AddUserComponent
    },
    {
        path:"edit-user",
        component: EditUserComponent
    },
    {
        path:"user-list",
        component: UserListComponent
    },
    {
        path:"edit-product",
        component: EditProductComponent
    },
    {
        path:"add-product",
        component: AddProductComponent
    },
    {
        path:"product-list",
        component: ProductListComponent
    }
];
