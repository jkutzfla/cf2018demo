import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartCreateComponent } from './shoppingcart-create.component';

import { FormsModule } from '@angular/forms';

// this needs http due to the productService http call.
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('ShoppingcartCreateComponent', () => {
	let component: ShoppingcartCreateComponent;
	let fixture: ComponentFixture<ShoppingcartCreateComponent>;

	let httpClient: HttpClient;
	let httpTestingController: HttpTestingController;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ShoppingcartCreateComponent],
			imports: [FormsModule, HttpClientTestingModule]
		})
			.compileComponents();

		// Inject the http service and test controller for each test
		httpClient = TestBed.get(HttpClient);
		httpTestingController = TestBed.get(HttpTestingController);
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShoppingcartCreateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
