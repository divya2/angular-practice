import { computed, Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<CartItem[]>([]);
  discount = signal(10);

  cartCount = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.quantity, 0));

  subTotal = computed(() =>
    this.cartItems().reduce((sum, item) => sum + item.price * item.quantity, 0));

  discountAmount = computed(() => {
    return this.subTotal() * (this.discount()/100);
  });

  discountedSubtotal = computed(() => {
    return this.subTotal() - this.discountAmount();
  });


  tax = computed(() => this.discountedSubtotal() * 0.13);

  grandTotal = computed(() => this.discountedSubtotal() + this.tax());

  addToCart(product: Product): void {
    const existingItem = this.cartItems().find(item => item.id === product.id)
    if(existingItem) {
      this.increaseQuantity(product.id);
      return;
    }
    this.cartItems.update(items => [
      ...items,
      {
        ...product,
        quantity: 1
      }
    ])
  }

  increaseQuantity(id: number): void{
    this.cartItems.update(items =>
      items.map(item =>
        item.id === id
        ? { ...item, quantity: item.quantity + 1}
        : item
      )
    )
  }

  decreaseQuantity(id: number): void{
    this.cartItems.update(items =>
      items.map(item =>
        item.id === id
        ? { ...item, quantity: item.quantity - 1}
        : item
      ).filter(item => item.id > 0)
    );
  }

  removeItem(id: number): void {
    this.cartItems.update(items =>
      items.filter(item => item.id !== id)
    );
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

}
