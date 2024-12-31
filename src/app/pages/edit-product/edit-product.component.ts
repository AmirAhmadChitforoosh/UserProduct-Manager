import { Product } from './../../model/product.model';
import { Component } from '@angular/core';
import { FormComponent } from '../../entities/form/form.component';
import { BackEndService } from '../../services/backendservice.service';
import { ActivatedRoute, Router } from '@angular/router';

import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-edit-product',
  imports: [FormComponent],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {
     private _newProduct: Product | null = null;
     productId: number | null = null;
      get newProduct(): Product | null {
        return this._newProduct;
      }

      set newProduct(product: Product) {
        product.id = this.productId;
        this._newProduct = product;
        this.baackendService.editProduct(product).subscribe((d) => {
          const products = this.storage.getProducts();

          for (let i = 0; i < products.length; i++) {
            if (products[i].id == product.id) {
              products[i] = product;
            }
          }
          console.log(product);
          console.log(products);
          this.storage.setProducts(products);
          this.router.navigate(['/product-list']);
        });

      }

      constructor(
        private baackendService: BackEndService,
        private storage: StorageService,
        private router: Router,
        private routeParam:ActivatedRoute
      ) {}

      ngOnInit(): void {
        this.routeParam.queryParams.subscribe((param) => {
          this.productId = param['id'];
        });
      }
}
