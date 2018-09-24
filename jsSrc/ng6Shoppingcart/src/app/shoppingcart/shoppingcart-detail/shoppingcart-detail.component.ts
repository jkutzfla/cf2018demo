import { Component, OnInit, Input } from '@angular/core';
import { Shoppingcart } from '../../core/shoppingcart.interface';

@Component({
	selector: 'app-shoppingcart-detail',
	templateUrl: './shoppingcart-detail.component.html',
	styleUrls: ['./shoppingcart-detail.component.css']
})
export class ShoppingcartDetailComponent implements OnInit {
	@Input() cart: Shoppingcart;
	constructor() { }

	ngOnInit() {
	}

}
