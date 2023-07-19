import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(mod => mod.UserModule) },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(mod => mod.ProductsModule) },
  { path: 'cart', loadComponent: () => import('./cart/cart-landing/cart-landing.component').then(mod => mod.CartLandingComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
