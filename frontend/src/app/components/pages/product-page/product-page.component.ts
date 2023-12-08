import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {
    // Ottieni il parametro _id dalla route nel costruttore
  }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.params['id'];

    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (product: Product) => {
          console.log('Product received:', product);
          this.product = product;
        },
        (error: any) => {
          console.error('Errore nella richiesta:', error);
        }
      );
    }
  }
}
