import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private ActivatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe((serverProducts) => {
      this.products = serverProducts;
    });
  }

}
