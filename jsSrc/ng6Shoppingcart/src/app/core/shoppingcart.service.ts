import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { Shoppingcart } from './shoppingcart.interface';


@Injectable({
	providedIn: 'root'
})
export class ShoppingcartService {
	private apiUrl = '/api/cart';
	cartList: Shoppingcart[];
	cart: Shoppingcart;

	constructor(private http: HttpClient) { }

	getCartlist(): Observable<Shoppingcart[]> {
		const apiUrl = '/api/cart/list';
		return this.http.get<any>(apiUrl)
			.pipe(
				tap( cartlist => this.cartList = cartlist as Shoppingcart[])
			);
	}

	getCachedCartlist(): Observable<Shoppingcart[]> {
		if (this.cartList) {
			return of(this.cartList);
		} else {
			return this.getCartlist();
		}
	}

	createCart(newCart: Shoppingcart): Promise<Shoppingcart> {
		const apiUrl = '/api/cart';
		// const httpOptionsNew = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
		const payload = {cart: newCart};
		return this.http.post<Shoppingcart>(apiUrl, payload).toPromise();
			//.pipe(
			//	catchError( function() {console.log('Error ', newCart)})
			//);
/*			.pipe(
				tap(response => {
					console.log('in service createCart', response);
					// this.cartList.push( response as Shoppingcart);
				}),
				map(response => response as Shoppingcart),
				// tap(sc => this.cartList.push(sc)),
				tap(sc => console.log('end of service createCart', sc))
			); */
	}

	getCart(): Observable<Shoppingcart> {
		return this.http.get<Shoppingcart>(this.apiUrl)
			.pipe(
				tap(
					(cart) => {
						if (!cart.items) {
							cart.items = [];
						}
					}
				)
			);
	}
}
