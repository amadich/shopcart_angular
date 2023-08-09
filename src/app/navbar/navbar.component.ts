import { Component } from '@angular/core';
import { CartService } from '../cart.service'; // Adjust the import path based on your project structure

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private cartService: CartService) {}

  get cart(): any[] {
    return this.cartService.cart;
  }

  calculateTotalPrice(): string {
    const totalPrice = this.cartService.cart.reduce((total, product) => total + parseFloat(product.prix), 0);
    return totalPrice.toFixed(2) + '$';
  }
  

}
