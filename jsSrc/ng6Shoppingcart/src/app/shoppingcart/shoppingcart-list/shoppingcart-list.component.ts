import { Component, OnInit } from '@angular/core';
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
	cartSelected: Shoppingcart;

	constructor(
		private productService: ProductService,
		private shoppingCartService: ShoppingcartService) { }

	ngOnInit() {
		this.isLoading = true;
		this.cartList = [];
		this.getProducts();
		this.getCarts();
	}

	getCarts(): void {
		this.shoppingCartService.getCartlistCached()
			.subscribe(carts => {
				this.cartList = carts;
				this.isLoading = false;
			});
	}

	getProducts(): void {
		this.productService.getProductsCached()
			.subscribe(products => console.log('Loading products count: ', products.length))
			.add( console.log('subscribe() to getProductsCached() is complete'));
	}

	select(cart: Shoppingcart) {
		this.isLoading = true;
		this.cartSelected = null;
		this.shoppingCartService.getCart(cart.id)
			.subscribe( fullcart => {
				this.cartSelected = fullcart;
				this.isLoading = false;
			});
	}

	onCreateCart(newCart: Shoppingcart) {
		this.isLoading = true;
		console.log('In sc-list, createCart()', newCart);
		// const newCart: Shoppingcart = { id, name } as Shoppingcart;
		this.shoppingCartService.createCart(newCart)
			.subscribe( cart => console.log('saved new cart', cart));
	}

	delete(cart: Shoppingcart) {

	}
}

