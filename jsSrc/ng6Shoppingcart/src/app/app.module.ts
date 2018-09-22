import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ShoppingcartModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
