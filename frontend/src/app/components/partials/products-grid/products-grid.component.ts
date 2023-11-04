import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {
    let productObservable: Observable<Product[]>
    productObservable = productService.getAll();

    productObservable.subscribe((serverProducts) => {
      this.products = serverProducts;
    })
  }

  ngOnInit(): void {

  }
}
