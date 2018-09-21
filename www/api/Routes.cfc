component {
	Array function getRoutes() {
		var routes = [
			{"$GET/carttest" = "cart/show"},

			{"$GET/cart/list" = "cart/list"},
			{"$POST/cart/:id/additem" = "cart/additem/id/:id"},
			{"$POST/cart/:id/delete" = "cart/delete/id/:id"},
			{"$POST/cart" = "cart/create"},
			{"$GET/cart/:id" = "cart/get/id/:id"},

			{"$POST/cartitem/remove/:id" = "cart/removeitem/id/:id"},

			{"$GET/products" = "products/list"},

			{"$GET/status" = "status/apistatus"},
			{"$GET/users" = "users/list"},
			{"$POST/auth" = "users/login"}
		];
		return routes;
	}
}
