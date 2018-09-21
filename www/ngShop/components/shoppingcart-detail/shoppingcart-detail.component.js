angular.module('app').component('shoppingcartDetail', {
	bindings: {
		cart: '<',
	},
	templateUrl: 'components/shoppingcart-detail/shoppingcart-detail.html',
	controller: ['Shoppingcart', function(Shoppingcart) {
		this.fullcart;
		this.isLoading = false;
		this.isAdding = false;
		this.displayAddItem = false;
		this.newitem = Shoppingcart.newEmptyItem();

		this.getCartTotal = function() {
			var current = 0;
			if (this.fullcart && this.fullcart.totalDollar) {
				current = this.fullcart.totalDollar;
			}
			var temp = 0;
			if (this.newitem.quantity > 0) {
				temp = this.newitem.quantity * this.newitem.price;
			}
			return current + temp;
		}

		this.$onInit = function() {
			this.isLoading = true;
			var self = this;
			Shoppingcart.get(this.cart.id).then(function() {
				self.fullcart = Shoppingcart.cart;
				//self.items = self.fullcart.
				self.isLoading = false;
			});
		}

		this.addItem = function() {
			this.isAdding = true;
			var self = this;
			Shoppingcart.addItem(this.fullcart.id, this.newitem).then(function() {
				self.newitem = Shoppingcart.newEmptyItem();
				self.fullcart = Shoppingcart.cart;
				self.isAdding = false;
			});
		}

		this.resetNewItem = function() {
			this.displayAddItem = false;
			this.newitem = Shoppingcart.newEmptyItem();
		}
	}]
})
