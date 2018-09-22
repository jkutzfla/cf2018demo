angular.module('app').component('shoppingcartDetail', {
	bindings: {
		cart: '<',
	},
	templateUrl: 'components/shoppingcart-detail/shoppingcart-detail.html',
	controller: [function() {
		this.isLoading = false;
	}]
})
