import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  addToCart(product: any): void {
    this.cart.push(product);
  }

  calculateTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.prix, 0);
  }
}
