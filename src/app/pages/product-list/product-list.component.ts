import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { BackEndService } from '../../services/backendservice.service';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';
import { BigDecimal } from "../../pipes/bigDecimal.pipe";
import { weightPipe } from "../../pipes/weight.pipe";

@Component({
  selector: 'app-product-list',
  imports: [BigDecimal, weightPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products:Product[] = [];

  constructor(private backendService:BackEndService , private storage:StorageService,
    private router:Router
  ){
    this.products = this.storage.getProducts();
  }

  editProduct(event:Event){
    const buttonElement = event.target as HTMLButtonElement;
    const parentDiv = buttonElement.parentElement?.parentElement as HTMLElement;
    const id = parseInt(parentDiv.id.replace(/\D/g, ''), 10);
    this.router.navigate(['/edit-product'], { queryParams: { id: id } });
  }

  deleteProduct(event:Event){
    const buttonElement = event.target as HTMLButtonElement;
    const parentDiv = buttonElement.parentElement?.parentElement as HTMLElement;
    const id = parseInt(parentDiv.id.replace(/\D/g, ''), 10);
    this.backendService.deleteProduct(id).subscribe(()=>{
      this.backendService.getProducts().subscribe((d)=>{
        console.log(d);
        this.storage.setProducts(Object.values(d));
        this.products = this.storage.getProducts();
      }
      )
    });

  }


}
