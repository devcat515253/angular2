import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './app/shopping-list/shopping-list.component';
import { CartComponent } from './app/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/shoppingList', pathMatch: 'full' },
  { path: 'shoppingList',  component: ShoppingListComponent },
  { path: 'cart',     component: CartComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
