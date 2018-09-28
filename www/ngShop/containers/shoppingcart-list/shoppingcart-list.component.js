'use strict';
//shoppingcart-list.component.js
angular.module('app').component('shoppingcartList', {
	bindings: {},
	templateUrl: 'containers/shoppingcart-list/shoppingcart-list.html',
	//in shoppingcart-list.component.js:
	controller: ['Shoppingcart', 'Product', function(Shoppingcart, Product) {
		// this.cartlist is a variable on the controller.
		// It will be accessible within the shoppingcart-list template
		// as $ctrl.cartlist
		// In this case it is an array.
		this.cartlist = [];
		this.cartSelected;

		// onInit in shoppingcart-list.js
		this.$onInit = function() {
			this.isLoading = true;
			var self = this;
			//Shoppingcart object was injected
			Shoppingcart.getList().then( function() {
				// inside the promise returned by Shoppingcart.getList()
				self.cartlist = Shoppingcart.cartlist;
				Product.getList().then(function() {
					// inside the promise form Product.getList(), now template is ok to render:
					self.isLoading = false;
				});
			});
		}

		// bind to this method from the template: <shoppingcart-create on-create="$ctrl.createCart(name)">
		this.createCart = function(name) {
			console.log('in create, name=', name);
			this.isLoading = true;
			var self = this;
			return Shoppingcart.create(name).then( function() {
				self.cartlist = Shoppingcart.cartlist;
				self.isLoading = false;
			});
		}

		this.select = function(cart) {
			this.isLoading = true;
			this.cartSelected = null;

			var self = this;
			Shoppingcart.get(cart.id).then( function() {
				self.cartSelected = Shoppingcart.cart;
				self.isLoading = false;
			});
		}

		this.delete = function(cart) {
			this.isLoading = true;
			var self = this;
			Shoppingcart.delete(cart.id).then( function() {
				self.cartlist = Shoppingcart.cartlist;
				self.isLoading = false;
			});
		}

		this.addItem = function(item) {
			this.isLoading = true;
			var self = this;
			console.log('addItem in shoppingcart-list container', item);
			return Shoppingcart.addItem(this.cartSelected.id, item).then(function() {
				self.cartlist = Shoppingcart.cartlist;
				self.cartSelected = null;
				self.cartSelected = Shoppingcart.cart;
				self.isLoading = false;
			});
		}
	}]
});
