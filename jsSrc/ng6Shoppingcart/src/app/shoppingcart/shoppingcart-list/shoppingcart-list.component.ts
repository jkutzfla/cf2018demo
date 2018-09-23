import { Component, OnInit } from '@angular/core';

import { Observable} from 'rxjs';

import { ProductService } from '../../core/product.service';
import { Product } from '../../core/product.interface';
import { ShoppingcartService } from '../../core/shoppingcart.service';
import { Shoppingcart } from '../../core/shoppingcart.interface';


@Component({
	selector: 'app-shoppingcart-list',
	templateUrl: './shoppingcart-list.component.html',
	styleUrls: ['./shoppingcart-list.component.css']
})
export class ShoppingcartListComponent implements OnInit {
	isLoading: boolean;
	cartList: Shoppingcart[];

	constructor(
		private productService: ProductService,
		private shoppingCartService: ShoppingcartService) { }

	ngOnInit() {
		this.isLoading = true;
		this.cartList = [];
		this.productService.getProductsCached()
			.subscribe(products => {
				// this.products = products;
				// this.isLoading = false;
			});

		// this.cartList = this.shoppingCartService.getCachedCartlist();
		// this.cartList.subscribe();

		this.shoppingCartService.getCachedCartlist()
			.subscribe(cartList => {
				this.cartList = cartList;
				this.isLoading = false;
			});
	}

	testAddCart() {
		this.cartList.push({name: 'testAddCart()'} as Shoppingcart);
	}

	onCreateCart(newCart: Shoppingcart) {
		this.isLoading = true;
		//this.cartList = [];
		console.log('In sc-list, createCart()', newCart);
		this.shoppingCartService.createCart(newCart).then(result => {
			alert(result.name);
			console.log('result from createCart() toPromise() = ', result);
			this.cartList.push(result);
		});

/*		this.shoppingCartService.createCart(newCart)
			.subscribe(cart => {
				alert(cart.name);
				this.cartList.push(cart);
			}); */
	}
			//{
				//alert(cart.name);
				//console.log('inside createCart subscribe(), cart is', cart);
				//this.cartList.push(cart);
				//this.isLoading = false;
				// this.cartList.push(cart);
				//this.cartList = [];
				//this.shoppingCartService.getCartlist()
				//	.subscribe(cartList => {
				//		this.cartList = cartList;
				//	});
				//this.cartList.subscribe();
		/*				this.shoppingCartService.getCachedCartlist().subscribe(cartList => {
					this.cartList = cartList; */

//				});
	//}
//				this.cartList = this.shoppingCartService.getCachedCartlist();

}
