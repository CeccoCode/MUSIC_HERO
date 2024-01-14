import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute, // Rinomina 'ActivatedRoute' in 'route' per convenzione
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryId = params['categoryId'];
      if (categoryId) {
        this.productService.getProductsByCategory(categoryId).subscribe((serverProducts) => {
          this.products = serverProducts;
        });
      }
    });
  }
}