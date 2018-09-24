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

	cartList: Shoppingcart[];
	cart: Shoppingcart;

	constructor(
		private http: HttpClient,
		httpErrorHandler: HttpErrorHandler) {
			this.handleError = httpErrorHandler.createHandleError('ShoppingcartService');
		}

	getCartlist(): Observable<Shoppingcart[]> {
		const apiUrl = '/api/cart/list';
		return this.http.get<Shoppingcart[]>(apiUrl)
			.pipe(
				tap( cartList => this.cartList = cartList as Shoppingcart[])
			);
	}

	getCartlistCached(): Observable<Shoppingcart[]> {
		if (!this.cartList) {
			return this.getCartlist();
		} else {
			return of(this.cartList);
		}
	}

	createCart(newCart: Shoppingcart): Observable<Shoppingcart> {
		const apiUrl = '/api/cart';
		const payload = {cart: newCart};
		return this.http.post<any>(apiUrl, payload, httpOptions)
			.pipe(
				map(response => response.cart), // the response has a root cart key.
				tap(sc => this.cartList.push(sc)),
				catchError( this.handleError('createCart', newCart) )
			);
	}

	getCart(cartid: Number): Observable<Shoppingcart> {
		return this.http.get<any>(this.apiUrl + '/' + cartid)
			.pipe(
				map(response => response.cart),
				tap(
					(cart) => { if (!cart.items) { cart.items = [];	} }
				),
				tap(
					(cart) => {
						this.cartList = this.cartList.filter(function (c) {
							return c.id !== cart.id;
						});
						console.log('about to re-add cart id: ' + cart.id);
						this.cartList.push(cart);
					}
				)
			);
	}

	deleteCart(cartid: Number): Observable<Shoppingcart> {
		return this.http.post<any>(this.apiUrl + '/' + cartid + '/delete', {})
			.pipe(
				tap(reponse => {
					this.cartList = this.cartList.filter( function (c) { return c.id !== cartid; });
				})
			);
	}

	addCartitem(cartid: Number, cartitem: ShoppingcartItem): Observable<Shoppingcart> {
		const url = this.apiUrl + '/' + cartid + '/additem';
		return this.http.post<any>(url, {item: cartitem})
			.pipe(
				map(response => response.cart),
				tap( (cart) => {
					this.cartList = this.cartList.filter( function(c) { return c.id !== cart.id; });
					this.cartList.push(cart);
				})
			);
	}
}
