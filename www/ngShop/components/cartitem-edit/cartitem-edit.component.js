'use strict';

angular.module('app').component('cartitemEdit', {
	bindings: {
		cart: '<',
		onAddItem: '&'
	},
	templateUrl: 'components/cartitem-edit/cartitem-edit.html',
	controller: ['Shoppingcart', 'Product', function(Shoppingcart, Product) {
		this.productlist = [];
		this.item = Shoppingcart.newEmptyItem();

		this.$onInit = function() {
			this.productlist = Product.productlist;
		}

		this.populateProduct = function() {
			//console.log('populateProduct()');
			if (this.item.productId && this.item.productId > 0) {
				var pid = this.item.productId;
				var product = this.productlist.find(function (p) {
					return p.id == pid;
				});
				this.item.productName = product.name;
				this.item.price = product.priceDollar;
			} else {
				this.item.price = 0;
			}
		}

		this.addItem = function() {
			console.log('addItem in cartitem-edit', this.item);
			var self = this;
			this.onAddItem({item: this.item}).then(function() {
				self.item = Shoppingcart.newEmptyItem();
			});
		}

		this.getCartTotal = function() {
			var current = 0;
			if (this.cart && this.cart.totalDollar) {
				current = this.cart.totalDollar;
			}
			var temp = 0;
			if (this.item.quantity > 0) {
				temp = this.item.quantity * this.item.price;
			}
			return current + temp;
		}


/*		this.	populateCartitemByProductId(ci: Cartitem, pid: number): Cartitem {
			let product = this.products.find(p => p.id == pid);
			ci.priceDollar = product.priceDollar;
			ci.productName = product.name;
			return ci;
		} */
	}]
});
