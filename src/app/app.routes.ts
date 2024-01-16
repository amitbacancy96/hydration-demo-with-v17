import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ConstraintsComponent } from './constraints/constraints.component';
import { homeResolver } from './utilities/home.resolver';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        resolve: { homeResolver }
    }, {
        path: 'products',
        component: ProductsComponent,
    },{
        path: 'constraints',
        component: ConstraintsComponent
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
