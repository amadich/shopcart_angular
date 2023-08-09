import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../assets/api/product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product); // Add the selected product to the cart
  }
}
