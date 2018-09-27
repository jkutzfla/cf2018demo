import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { ShoppingcartListComponent } from './shoppingcart-list/shoppingcart-list.component';
import { ShoppingcartDisplayComponent } from './shoppingcart-display/shoppingcart-display.component';
import { ShoppingcartCreateComponent } from './shoppingcart-create/shoppingcart-create.component';
import { ShoppingcartDetailComponent } from './shoppingcart-detail/shoppingcart-detail.component';
import { CartitemAddComponent } from './cartitem-add/cartitem-add.component';
import { CartitemEditComponent } from './cartitem-edit/cartitem-edit.component';

@NgModule({
	imports: [
		CommonModule, HttpClientModule, FormsModule
	],
	declarations: [
		ShoppingcartListComponent, ShoppingcartDisplayComponent, ShoppingcartCreateComponent, ShoppingcartDetailComponent
		, CartitemAddComponent, CartitemEditComponent],
	exports: [ShoppingcartListComponent]
})
export class ShoppingcartModule { }
