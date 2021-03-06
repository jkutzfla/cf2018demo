import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Shoppingcart, ShoppingcartItem } from '../../core/shoppingcart.interface';
import { ProductService } from '../../core/product.service';
import { Product } from '../../core/product.interface';

@Component({
	selector: 'app-cartitem-edit',
	templateUrl: './cartitem-edit.component.html',
	styleUrls: ['./cartitem-edit.component.css']
})
export class CartitemEditComponent implements OnInit {
	@Input() cart: Shoppingcart;
	@Input() cartitem: ShoppingcartItem;

	@Output() savedShoppingcartItem = new EventEmitter<ShoppingcartItem>();

	isLoading = true;
	productList: Product[];
	originalAmount = 0;

	constructor(private productService: ProductService) { }

	get cartWorkingTotal(): number {
		return this.cart.totalDollar - this.originalAmount + (this.cartitem.priceDollar * this.cartitem.quantity);
	}

	ngOnInit() {
		this.isLoading = true;
		this.originalAmount = this.cartitem.totalDollar;
		this.productService.getProductsCached()
			.subscribe( products => {
				this.productList = products;
				this.isLoading = false;
			});
	}

	save() {
		console.log('save() in cartitem-edit');
		this.isLoading = true;
		this.savedShoppingcartItem.emit(this.cartitem);
		this.cartitem = {} as ShoppingcartItem;
		this.isLoading = false;
		console.log('done with save() in cartitem-edit');
	}

	populateProduct() {
		// console.log('populateProduct()', this.cartitem);
		if (this.cartitem.productId && this.cartitem.productId > 0) {
			const pid = this.cartitem.productId;
			const product = this.productList.find( function(p) {
				// console.log('About to check the p', p, 'to match given id: ', pid);
				// this compare must not use the triple equals:
				return p.id == pid;
			});
			// console.log('found: ', product);
			this.cartitem.productName = product.name;
			this.cartitem.priceDollar = product.priceDollar;
			// console.log(this.cartitem);
		} else {
			this.cartitem.priceDollar = 0;
			this.cartitem.productName = '';
		}
	}
}
