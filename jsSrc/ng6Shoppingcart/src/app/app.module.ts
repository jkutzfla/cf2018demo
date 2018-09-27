import { BrowserModule } from '@angular/platform-browser';
// add animations:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
		BrowserAnimationsModule,
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
