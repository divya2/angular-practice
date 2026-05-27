import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details.component';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: ':id',
    component: ProductDetailsComponent
  }
];