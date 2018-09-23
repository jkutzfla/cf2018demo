import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Shoppingcart } from '../../core/shoppingcart.interface';

@Component({
	selector: 'app-shoppingcart-create',
	templateUrl: './shoppingcart-create.component.html',
	styleUrls: ['./shoppingcart-create.component.css']
})
export class ShoppingcartCreateComponent implements OnInit {
	@Output() added = new EventEmitter<Shoppingcart>();
	isLoading = false;
	newCart: Shoppingcart;
	constructor() { }

	ngOnInit() {
		this.newCart = this.newCartObject();
	}

	create() {
		console.log('in sc-create create()');
		this.isLoading = true;

		this.added.emit(this.newCart);
		this.newCart = this.newCartObject();
		this.isLoading = false;
	}

	private newCartObject(): Shoppingcart {
		const sc: Shoppingcart = {id: 0, items: [], name: '', totalDollar: 0};
		return sc;
	}

}
