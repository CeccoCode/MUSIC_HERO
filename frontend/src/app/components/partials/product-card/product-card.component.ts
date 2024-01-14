import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private cartService: CartService, private router: Router) {
    this.product = {} as Product;
  }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart');
  }

  toggleFavorite() {
    if (this.product) {
      this.product.favorite = !this.product.favorite;
    }
  }
}
