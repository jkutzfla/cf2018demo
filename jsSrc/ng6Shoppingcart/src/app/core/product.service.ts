import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Product } from './product.interface';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private apiUrl = '/api/products';
	cachedData: Product[];

	constructor(private http: HttpClient) {
		console.log('constructor() of ProductService called.');
	}

	getProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.apiUrl)
			.pipe(
				tap(products => {
					console.log('fetched products, ', products);
					this.cachedData = products;
				})
			);
	}

	getProductsCached(): Observable<Product[]> {
		if (this.cachedData) {
			return of(this.cachedData);
		} else {
			return this.getProducts();
		}
	}
}
