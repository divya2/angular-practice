import { Component, inject, signal } from "@angular/core";
import { CartService } from "../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  cartService = inject(CartService);
}
