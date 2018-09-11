component {
	Array function getRoutes() {
		var routes = [
			{"$GET/status" = "apistatus/status"},
			{"$GET/users" = "users/getall"},
			{"$GET/v1/authenticate" = "/apisecurity/authenticate"}
		];
		return routes;
	}
}
