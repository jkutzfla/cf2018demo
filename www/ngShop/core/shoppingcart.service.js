'use strict';
//shoppingcart.service.js
angular.module('app').factory('Shoppingcart', ['$http', function($http) {
	var service = {
		cartlist: [],
		cart: {},

		// in shoppingcart.service.js
		// will return a promise from the $http.get()
		getList: function() {
			var url = "/api/cart/list";
			//$http was injected:
			return $http.get(url).then(function (response) {
				// store the result in the object:
				service.cartlist = response.data;
			});
		},

		create: function(name) {
			var url = "/api/cart";
			var data = {cart: {name: name}};
			return $http.post(url, data).then(function(response) {
				var cart = response.data.cart;
				service.cartlist.push(cart);
			});
		},

		get: function(id) {
			var url = "/api/cart/" + id;
			return $http.get(url).then(function (response) {
				var cart = response.data.cart;
				service.cart = cart;
				// check the list and update
				//console.log('in get, cartlist=', service.cartlist, 'cart=', cart);
				service.cartlist = service.cartlist.filter(function (c) {
					return c.id != cart.id;
				});
				service.cartlist.push(cart);
			});
		},

		delete: function(id) {
			var url = "/api/cart/" + id + "/delete";
			return $http.post(url).then(function () {
				//remove from the list
				service.cartlist = service.cartlist.filter( function(c) {
					return c.id != id;
				});
			});
		},

		addItem: function(id, item) {
			var url = "/api/cart/" + id + "/additem";
			var data = {item: item};

			return $http.post(url, data).then(function (response) {
				return service.get(id);
			});
		},

		//this should go elsewhere.
		newEmptyItem: function() {
			return {quantity: 0, priceDollar: 0, productName: '', productId: 0 };
		}
	};

	return service;
}]);
