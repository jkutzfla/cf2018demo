import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartDisplayComponent } from './shoppingcart-display.component';
import { Shoppingcart } from '../../core/shoppingcart.interface';

describe('ShoppingcartDisplayComponent', () => {
	const comp = new ShoppingcartDisplayComponent();

	const sc: Shoppingcart = {id: 1, name: 'Test of Display Cart', dateCreated: new Date(), dateModified: new Date()};
	comp.cart = sc;

	it('should load', () => {
		expect(comp).toBeTruthy();
		expect(comp.cart.name).toBe('Test of Display Cart');
	});

	/*
	let component: ShoppingcartDisplayComponent;
	let fixture: ComponentFixture<ShoppingcartDisplayComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ShoppingcartDisplayComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShoppingcartDisplayComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	}); */
});
