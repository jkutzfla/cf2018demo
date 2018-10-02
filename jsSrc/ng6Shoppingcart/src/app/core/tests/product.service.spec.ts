import { TestBed } from '@angular/core/testing';
// need angular.io/guide/http for how to mock.
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { ProductService } from '../product.service';

describe('ProductService', () => {
	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});

		// Inject the http service and test controller for each test
		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
	});

	it('should be created', () => {
		const service: ProductService = TestBed.get(ProductService);
		expect(service).toBeTruthy();
	});
});
