import { TestBed } from '@angular/core/testing';

import { ShoppingcartService } from '../shoppingcart.service';

describe('ShoppingcartService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: ShoppingcartService = TestBed.get(ShoppingcartService);
		expect(service).toBeTruthy();
	});
});
