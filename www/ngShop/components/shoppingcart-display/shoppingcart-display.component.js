'use strict';
// shoppingcart-display.component.js
angular.module('app').component('shoppingcartDisplay', {
	bindings: {
		cart: '<'  //input 
	},
	templateUrl: 'components/shoppingcart-display/shoppingcart-display.html',
	controller: function() {}
});
