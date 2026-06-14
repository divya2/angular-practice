import { Component, inject, signal } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { CartComponent } from "../cart/cart.component";

@Component({
  selector: 'app-product',
  imports: [RouterLink, CartComponent],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  private cartService = inject(CartService);
  products = signal<Product[]>([
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Monitor', price: 300 },
    { id: 103, name: 'Keyboard', price: 80 }
  ]);

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}
