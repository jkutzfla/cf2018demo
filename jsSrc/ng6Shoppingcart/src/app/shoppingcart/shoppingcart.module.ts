import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingcartListComponent } from './shoppingcart-list/shoppingcart-list.component';
import { ShoppingcartDisplayComponent } from './shoppingcart-display/shoppingcart-display.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [ShoppingcartListComponent, ShoppingcartDisplayComponent],
	exports: [ShoppingcartListComponent]
})
export class ShoppingcartModule { }
