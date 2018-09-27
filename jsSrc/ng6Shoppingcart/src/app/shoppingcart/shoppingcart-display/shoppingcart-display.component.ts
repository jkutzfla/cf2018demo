import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Shoppingcart } from '../../core/shoppingcart.interface';

import {
	trigger,
	transition,
	query,
	style,
	animate,
	group
} from '@angular/animations';


@Component({
	selector: 'app-shoppingcart-display',
	templateUrl: './shoppingcart-display.component.html',
	animations: [
		trigger('valueAnimation', [
			transition(':increment', group([
				query(':enter', [
					style({ color: 'blue', fontSize: '50px' }),
					animate('0.8s ease-out', style('*'))
				])
			])),
			transition(':decrement', group([
				query(':enter', [
					style({ color: 'red', fontSize: '50px' }),
					animate('0.8s ease-out', style('*'))
				])
			]))
		])
	]
	// styleUrls: ['./shoppingcart-display.component.css']
})
export class ShoppingcartDisplayComponent implements OnInit, OnChanges {
	@Input() cart: Shoppingcart;
	@Input() cartname: String;
	constructor() { }

	// property
	get cartDollarTotal(): number {
		if (this.cart.totalDollar) {
			return this.cart.totalDollar;
		} else {
			return 0;
		}
	}

	ngOnInit() {
		// console.log('in sc-display onInit, ', this.cart);
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		// console.log('in sc-display onChanges, ', changes);
	}

}
