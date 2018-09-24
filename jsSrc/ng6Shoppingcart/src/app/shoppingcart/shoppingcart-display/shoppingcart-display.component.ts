import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Shoppingcart } from '../../core/shoppingcart.interface';

@Component({
	selector: 'app-shoppingcart-display',
	templateUrl: './shoppingcart-display.component.html',
	styleUrls: ['./shoppingcart-display.component.css']
})
export class ShoppingcartDisplayComponent implements OnInit, OnChanges {
	@Input() cart: Shoppingcart;
	@Input() cartname: String;
	constructor() { }

	ngOnInit() {
		// console.log('in sc-display onInit, ', this.cart);
	}

	ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
		// console.log('in sc-display onChanges, ', changes);
	}

}
