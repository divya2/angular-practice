import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './products.component.html'
})
export class ProductsComponent {
    products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Monitor', price: 300 },
    { id: 103, name: 'Keyboard', price: 80 }
  ];
}
