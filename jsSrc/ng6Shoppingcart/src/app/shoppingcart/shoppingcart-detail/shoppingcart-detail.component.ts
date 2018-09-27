import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shoppingcart, ShoppingcartItem } from '../../core/shoppingcart.interface';

@Component({
	selector: 'app-shoppingcart-detail',
	templateUrl: './shoppingcart-detail.component.html',
	styleUrls: ['./shoppingcart-detail.component.css']
})
export class ShoppingcartDetailComponent implements OnInit {
	@Input() cart: Shoppingcart;
	@Output() updatedItem = new EventEmitter<ShoppingcartItem>();

	selectedCartitem = 0;
	constructor() { }

	ngOnInit() {
	}

	updateItem(item: ShoppingcartItem) {
		console.log('updateItem() in sc-detail.comp');
		this.updatedItem.emit(item);
	}

}
