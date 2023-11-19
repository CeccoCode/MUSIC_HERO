import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }


  ngOnInit(): void {
    this.productService.getLastFeatured().subscribe((serverProducts) => {
      this.products = serverProducts;
    });
  }
}
