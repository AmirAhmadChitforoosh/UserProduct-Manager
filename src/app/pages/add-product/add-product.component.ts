import { BackEndService } from './../../services/backendservice.service';
import { Component } from '@angular/core';
import { FormComponent } from '../../entities/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-add-product',
  imports: [FormComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  private _newProduct: Product | null = null;
  get newProduct(): Product | null {
    return this._newProduct;
  }

  set newProduct(product: Product) {
    this._newProduct = product;
    this.baackendService.createProduct(product).subscribe((d) => {
      const products = this.storage.getProducts();
      const addProduct = d as Product;
      console.log(addProduct);
      products.push(addProduct);

      this.storage.setProducts(products);
    });
  }

  constructor(
    private baackendService: BackEndService,
    private storage: StorageService,
    private router: Router
  ) {}
}
