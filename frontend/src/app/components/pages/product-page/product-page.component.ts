import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  product!: Product;
  selectedImage!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    const productId = this.activatedRoute.snapshot.params['id'];

    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (product: Product) => {
          this.product = product;
          this.selectedImage = product.images[0];
        },
        (error: any) => {
          console.error('Errore nella richiesta:', error);
        }
      );
    }
  }
  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart');
  }
}
