import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingcartListComponent } from './shoppingcart/shoppingcart-list/shoppingcart-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: 'cart', component: ShoppingcartListComponent},
	{ path: '', redirectTo: 'cart', pathMatch: 'full'},
	{ path: '**', redirectTo: 'cart'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {enableTracing: false, useHash: false})
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class AppRoutingModule { }
