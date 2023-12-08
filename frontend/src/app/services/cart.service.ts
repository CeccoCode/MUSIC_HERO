import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../shared/models/Product';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  // Funzione addToCart() => Aggiunge un elemento al carrello
  addToCart(product: Product): void {
    let cartItem = this.cart.items.find(item => item.product._id === product._id);
    if (cartItem) {
      return;
    }
    this.cart.items.push(new CartItem(product));
    this.setCartToLocalStorage();
  }

  // Funzione removeFromCart() => rimuove un elemento dal carrello
  removeFromCart(productId: string): void {
    this.cart.items = this.cart.items.filter(item => item.product._id != productId);
    this.setCartToLocalStorage();
  }

  // Funzione changeQuantity() => cambia la quantità di un elemento nel carrello
  changeQuantity(productId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.product._id === productId);
    if (!cartItem) {
      return;
    }
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.product.price;
    this.setCartToLocalStorage();
  }

  // Funzione clearCart() => svuota il carrello
  clearCart(): void {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  // Funzione per salvare il carrello nel localStorage del browser
  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart;
  }
}
