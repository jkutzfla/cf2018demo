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
		expect(product.id).toBe(0);
	});

	it('should cast from JSON', () => {
		const json = '{"priceDollar":9.99,"dateModified":"October, 02 2018 02:39:42","category":"Shampoo","pricePoint":0,"id":1,\
		"dateCreated":"October, 02 2018 02:39:42","name":"Cheap Shampoo"}';

		const p = JSON.parse(json) as Product;
		console.log(p);
		expect(p.id).toBe(1);

	});
});
