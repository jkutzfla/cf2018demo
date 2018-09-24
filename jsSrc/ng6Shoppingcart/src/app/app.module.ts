import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingcartModule } from './shoppingcart/shoppingcart.module';
import { CoreModule } from './core/core.module';

import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ShoppingcartModule,
		CoreModule
	],
	providers: [
		HttpErrorHandler,
		MessageService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
