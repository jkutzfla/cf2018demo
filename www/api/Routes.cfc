component {
	Array function getRoutes() {
		var routes = [
			{"$GET/carttest" = "cart/show"},

			{"$GET/cart/list" = "cart/list"},
			{"$GET/cart/lastUpdate" = "cart/lastUpdate"},
			{"$POST/cart/:id/additem" = "cart/additem/id/:id"},
			{"$POST/cart/:id/updateitem" = "cart/updateitem/id/:id"},
			{"$POST/cart/:id/delete" = "cart/delete/id/:id"},
			{"$POST/cart" = "cart/create"},
			{"$GET/cart/:id" = "cart/get/id/:id"},

			{"$POST/cartitem/remove/:id" = "cart/removeitem/id/:id"},

			{"$GET/products" = "products/list"},

			{"$GET/status" = "status/apistatus"},
			{"$GET/users" = "users/list"},
			{"$POST/auth" = "users/login"},

			{"$GET/heroes" = "heroes/list"},
			{"$POST/heroes" = "heroes/create"}
		];
		return routes;
	}
}
