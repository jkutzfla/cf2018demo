import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { Product } from '../../core/product.interface';
import { ShoppingcartService } from '../../core/shoppingcart.service';
import { Shoppingcart, ShoppingcartItem } from '../../core/shoppingcart.interface';
import { Observable } from 'rxjs';

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

	cartlistOrdered(): Shoppingcart[] {
		const sorted =  this.cartList.sort( function (a, b) {
			return a.id - b.id;
		});
		return sorted;
	}

	getCarts(): void {
		this.shoppingCartService.getCartlist()
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
				this.cartList = this.cartList.filter( c => c.id !== cart.id);
				this.cartList.push(fullcart);
				this.isLoading = false;
			});
	}

	onCreateCart(newCart: Shoppingcart) {
		this.isLoading = true;
		console.log('In sc-list, createCart()', newCart);
		// const newCart: Shoppingcart = { id, name } as Shoppingcart;
		this.shoppingCartService.createCart(newCart)
			.subscribe( cart => {
				console.log('saved new cart', cart);
				this.cartList.push(cart);
				this.isLoading = false;
			});
	}

	delete(cart: Shoppingcart) {
		this.isLoading = true;
		this.shoppingCartService.deleteCart(cart.id)
			.subscribe( () => {
				this.cartList = this.cartList.filter(c => c.id !== cart.id);
				this.isLoading = false;
			});
	}

	addCartitem(cartitem: ShoppingcartItem) {
		console.log('addCartitem() in sc-list.component');
		this.isLoading = true;
		const cartid = this.cartSelected.id;
		this.cartSelected = null;
		return this.shoppingCartService.addCartitem(cartid, cartitem)
			.subscribe((cart) => {
				this.cartSelected = cart;
				this.getCarts();
			});
	}

	getEmptyCartitem(): ShoppingcartItem {
		return {} as ShoppingcartItem;
	}
}

