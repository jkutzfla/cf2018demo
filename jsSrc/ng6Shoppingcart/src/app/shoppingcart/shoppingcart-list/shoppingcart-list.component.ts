// shoppingcart-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/product.service';
import { ShoppingcartService } from '../../core/shoppingcart.service';
import { Shoppingcart, ShoppingcartItem } from '../../core/shoppingcart.interface';

import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';
import { forkJoin } from 'rxjs';

@Component({
	selector: 'app-shoppingcart-list',
	templateUrl: './shoppingcart-list.component.html',
	styleUrls: ['./shoppingcart-list.component.css'],
	animations: [
		trigger('popOverState', [
			state('show', style({
				opacity: 1
			})),
			state('hide', style({
				opacity: 0
			})),
			transition('show => hide', animate('500ms ease-out')),
			transition('hide => show', animate('500ms ease-in'))
		])
	],
})
export class ShoppingcartListComponent implements OnInit {
	isLoading: boolean;
	cartList: Shoppingcart[];
	cartSelected: Shoppingcart;
	emptyCartitem: ShoppingcartItem;
	sortBy = 'id';
	sortDirection = 'asc';

	constructor(
		private productService: ProductService,
		private shoppingCartService: ShoppingcartService) { }

	isOpen = false;

	// property
	get isACartSelected(): boolean {
		return this.cartSelected ? true : false;
	}

	ngOnInit() {
		this.isLoading = true;
		this.cartList = [];
		const products = this.productService.getProductsCached();
		const carts = this.shoppingCartService.getCartlist();
		// when starting up, dont show the page until all required network resources are loaded.
		// forkJoin is the Promise.all for rxjs.
		forkJoin( [products, carts] ).subscribe( results => {
			// results[0] is products,
			// results[1] is carts.
			this.cartList = results[1];
			this.isLoading = false;
		});

		this.emptyCartitem = {id: 0, quantity: 0, priceDollar: 0, totalDollar: 0};
	}

	cartlistOrdered(): Shoppingcart[] {
		const sorted =  this.cartList.sort( (a, b) => {
			if (this.sortDirection === 'desc') {
				const temp = b;
				b = a;
				a = temp;
			}

			if (this.sortBy === 'name') {
				return a.name.localeCompare(b.name);
			} else {
				return a.id - b.id;
			}
		});
		return sorted;
	}

	// called from ngOnInit or to update the list of carts.
	getCarts(): void {
		// the shoppingCartService returns an Observable<Shoppingcart[]>
		// once the cold stream completes, save the data in the component and flip the isLoading flag.
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
		// this.cartSelected = null;
		return this.shoppingCartService.addCartitem(cartid, cartitem)
			.subscribe((cart) => {
				this.cartSelected = cart;
				this.getCarts();
			});
	}

	updateCartitem(cartitem: ShoppingcartItem) {
		console.log('updateCartitem in sc-list.comp.ts');
		this.isLoading = true;
		return this.shoppingCartService.updateCartItem(cartitem.id, cartitem)
			.subscribe( (cart) => {
				this.cartSelected = cart;
				this.getCarts();
			});
	}

	updateCarts(): void {
		this.isLoading = true;
		this.getCarts();
	}
}

