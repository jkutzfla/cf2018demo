import { TestBed } from '@angular/core/testing';
// need angular.io/guide/http for how to mock.

import { Product } from '../product.interface';

describe('Core Interfaces', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({});
	});

	it('should create a Product', () => {
		const product: Product = {id: 0, name: 'Product', priceDollar: 0};
		expect(product).toBeTruthy();
		expect(product.name).toBe('Product');
	});
});
