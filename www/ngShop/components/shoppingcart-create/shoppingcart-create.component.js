// shoppingcart-create.component.js
// passes an event up
angular.module('app').component('shoppingcartCreate', {
	bindings: {
		onCreate: '&'
	},
	templateUrl: 'components/shoppingcart-create/shoppingcart-create.html',
	controller: function() {
		this.isLoading = false;
		this.name="";

		// when the create button is clicked:
		this.create = function() {
			console.log('create() in shoppingcart-create');
			this.isLoading = true;
			var self = this;
			this.onCreate({name: this.name}).then(function() {
				self.isLoading = false;
				self.name = "";
			});
		}
	}
})
