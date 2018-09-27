import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shoppingcart, ShoppingcartItem } from '../../core/shoppingcart.interface';
import { ProductService } from '../../core/product.service';
import { Product } from '../../core/product.interface';

@Component({
	selector: 'app-cartitem-add',
	templateUrl: './cartitem-add.component.html'
})
export class CartitemAddComponent implements OnInit {
	@Input() cart: Shoppingcart;
	// @Input() cartitem: ShoppingcartItem;
	cartitem: ShoppingcartItem;

	@Output() saveItem = new EventEmitter<ShoppingcartItem>();

	productList: Product[];
	isLoading = false;
	constructor(private productService: ProductService) { }

	ngOnInit() {
		this.isLoading = true;
		this.cartitem = {} as ShoppingcartItem;
		this.productService.getProductsCached()
			.subscribe( products => {
				this.productList = products;
				this.isLoading = false;
			});
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

	save() {
		console.log('save() in cartitem-edit');
		this.isLoading = true;
		this.saveItem.emit(this.cartitem);
		this.cartitem = {} as ShoppingcartItem;
		this.isLoading = false;
	}
}
