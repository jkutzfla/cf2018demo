'use strict';
//shoppingcart-list.component.js
angular.module('app').component('shoppingcartList', {
	bindings: {},
	templateUrl: 'containers/shoppingcart-list/shoppingcart-list.html',
	//in shoppingcart-list.component.js:
	controller: ['Shoppingcart', function(Shoppingcart) {
		this.cartlist = [];
		this.cartSelected;

		this.$onInit = function() {
			this.isLoading = true;
			var self = this;
			//Shoppingcart was injected
			Shoppingcart.getList().then( function() {
				self.cartlist = Shoppingcart.cartlist;
				self.isLoading = false;
			});
		}

		this.create = function(name) {
			console.log('in create, name=', name);
			this.isLoading = true;
			var self = this;
			return Shoppingcart.create(name).then( function() {
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
	}]
});
