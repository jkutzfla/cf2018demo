angular.module('app', []);

angular.module('app').component('shoppingCart', {
	templateUrl: 'shoppingcart.html',
	controller: function() {
		this.item = null;
		this.items = [
			{name: 'Fancy Shampoo', price: 36},
			{name: 'Mass market brand', price: 18},
			{name: 'Generic', price: 9.99}
		];
		this.quantity = 0;

		this.getCost = function() {
			console.log('getCost fired');
			if (this.item) {
				return this.item * this.quantity;
			}
		}
	}
});
