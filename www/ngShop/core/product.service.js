(function() {
	'use strict';
	//product.service.js
	angular.module('app').factory('Product', ['$http', function($http) {
		var service = {
			productlist: [],
			getList: getList
		};
		return service;
		function getList() {
			var url = "/api/products";
			return $http.get(url).then(function (response) {
				service.productlist = response.data;
			})
		}	
	}]);
})();
