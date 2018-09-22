import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingcartListComponent } from './shoppingcart/shoppingcart-list/shoppingcart-list.component';

const routes: Routes = [
	{ path: 'cart', component: ShoppingcartListComponent},
	{ path: '', redirectTo: 'cart', pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {enableTracing: false, useHash: true})
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class AppRoutingModule { }
