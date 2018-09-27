import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { Shoppingcart, ShoppingcartItem } from './shoppingcart.interface';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

const httpOptions = {headers: new HttpHeaders({'Content-Type':  'application/json'  })};

@Injectable({	providedIn: 'root' })
export class ShoppingcartService {
	private apiUrl = '/api/cart';
	private handleError: HandleError;

	constructor(
		private http: HttpClient,
		httpErrorHandler: HttpErrorHandler) {
			this.handleError = httpErrorHandler.createHandleError('ShoppingcartService');
		}

	// in shoppingcart.service.ts
	// create an Observable of an array of Shoppingcart
	// to be subscribe()'ed in a component.
	getCartlist(): Observable<Shoppingcart[]> {
		const apiUrl = this.apiUrl + '/list';
		return this.http.get<Shoppingcart[]>(apiUrl);
	}

	createCart(newCart: Shoppingcart): Observable<Shoppingcart> {
		const payload = {cart: newCart};
		return this.http.post<any>(this.apiUrl, payload, httpOptions)
			.pipe(
				map(response => response.cart), // the response has a root cart key.
				catchError( this.handleError('createCart', newCart) )
			);
	}

	// do HTTP GET /api/cart/{cartId}
	getCart(cartid: Number): Observable<Shoppingcart> {
		return this.http.get<any>(this.apiUrl + '/' + cartid)
			.pipe(
				map(response => response.cart as Shoppingcart),
				tap(
					(cart) => { if (!cart.items) { cart.items = [];	} }
				)
			);
	}

	deleteCart(cartid: Number): Observable<Shoppingcart> {
		return this.http.post<any>(this.apiUrl + '/' + cartid + '/delete', {});
	}

	addCartitem(cartid: Number, cartitem: ShoppingcartItem): Observable<Shoppingcart> {
		const url = this.apiUrl + '/' + cartid + '/additem';
		return this.http.post<any>(url, {item: cartitem})
			.pipe(
				map(response => response.cart)
			);
	}

	updateCartItem(itemid: Number, cartitem: ShoppingcartItem): Observable<Shoppingcart> {
		const url = this.apiUrl + '/' + itemid + '/updateitem';
		return this.http.post<any>(url, {item: cartitem})
			.pipe(
				map(response => response.cart)
			);
	}
}
