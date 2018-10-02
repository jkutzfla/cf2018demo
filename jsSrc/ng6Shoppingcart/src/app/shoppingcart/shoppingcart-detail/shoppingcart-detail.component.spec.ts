import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartDetailComponent } from './shoppingcart-detail.component';
import { Shoppingcart, ShoppingcartItem } from '../../core/shoppingcart.interface';

describe('ShoppingcartDetailComponent', () => {
	const comp = new ShoppingcartDetailComponent();
	const cart: Shoppingcart = {id: 1, name: 'Test', dateCreated: new Date(), dateModified: new Date()};
	comp.cart = cart;

	const updatedCartitem: ShoppingcartItem = {id: 1, priceDollar: 100, quantity: 2, totalDollar: 200};

	it('should create', () => {
		expect(comp).toBeTruthy();
	});

	it('should do the update', () => {
		comp.updatedItem.subscribe( item => expect(item).toBeTruthy());
	});
/*	let component: ShoppingcartDetailComponent;
	let fixture: ComponentFixture<ShoppingcartDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ShoppingcartDetailComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShoppingcartDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		// expect(component).toBeTruthy();
	}); */
});
