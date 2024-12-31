import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginProp } from '../model/loginProp.model';
import { User } from '../model/user.model';
import { StorageService } from './storage.service';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class BackEndService {
  constructor(private http: HttpClient, private storage: StorageService) {}

  logIn(login: LoginProp): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/api/auth', login).subscribe({
        next: (response: any) => {
          this.storage.setToken(response.sessionId);
          console.log('Token Saved:', this.storage.getToken());
          resolve(true);
        },
        error: (error) => {
          console.error('Login failed', error);
          reject(error);
        },
      });
    });
  }

  currentUser(): Promise<User> {
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );
    const http = this.http.get('http://localhost:3000/api/users/current', {
      headers,
    });
    return new Promise((resolve, reject) => {
      http.subscribe({
        next: (user) => {
          resolve(user as User);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  createUser(user: User): Observable<any> {
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );
    return this.http.post('http://localhost:3000/api/users', user, { headers });
  }

  editUser(user: User): Observable<any> {
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );
    return this.http.put('http://localhost:3000/api/users', user, { headers });
  }

  deleteUser(userId:number){
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );

    const body = {id: userId};

    return this.http.delete("http://localhost:3000/api/users" , {headers , body});
  }

  allUsers(): Observable<any> {
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );
    return this.http.get('http://localhost:3000/api/users', { headers });
  }

  // Product
  createProduct(product: Product) {
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );
    return this.http.post('http://localhost:3000/api/products', product, {
      headers,
    });
  }

  getProducts() {
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );
    return this.http.get('http://localhost:3000/api/products', { headers });
  }

  editProduct(product:Product){
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );
    return this.http.put('http://localhost:3000/api/products', product, { headers });
  }

  deleteProduct(productId:number){
    const headers = new HttpHeaders().set(
      'authorization',
      this.storage.getToken() || ''
    );

    const body = {id: productId};

    return this.http.delete("http://localhost:3000/api/products" , {headers , body});
  }
}
