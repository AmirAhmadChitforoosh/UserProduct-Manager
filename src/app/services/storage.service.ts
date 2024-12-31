import { Inject, Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private tokenKey = 'httpToken';
  private usersKey = 'users';
  private productsKey = 'products';

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken() {
    localStorage.setItem(this.tokenKey, '');
  }

  setUsers(users: User[]) {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
  getUsers() {
    const users = localStorage.getItem(this.usersKey) || '[]';
    return JSON.parse(users) as User[];
  }

  clearUsers() {
    localStorage.setItem(this.usersKey, '[]');
  }

  setProducts(products: Product[]) {
    localStorage.setItem(this.productsKey, JSON.stringify(products));
  }
  getProducts() {
    const products = localStorage.getItem(this.productsKey) || '[]';
    return JSON.parse(products) as Product[];
  }
  clearProducts() {
    localStorage.setItem(this.productsKey, '[]');
  }
}
