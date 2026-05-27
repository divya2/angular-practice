import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadComponent:() =>
        import('./home/home.component').then(c=>c.HomeComponent)
},{

    path: 'users',
    loadChildren:() =>
        import('./users/users.routes').then(c=>c.USERS_ROUTES)
},{

    path: 'products',
    loadChildren:() =>
        import('./products/products.routes').then(c=>c.PRODUCTS_ROUTES)
},{
    path: '**',
    redirectTo: ''
}];
