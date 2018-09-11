component accessors="true" {

	Array function getAll() {
		var users = EntityLoad("User");
		var out = [];
		for (var u in users) {
			out.append(forAPI(u));
		}
		return out;
	}

	Struct function forAPI(entity.User u) {
		var s = {
			"id" = u.getId(),
			"lastname" = u.getLastname(),
			"firstname" = u.getFirstname()
		};
		return s;
	}
}
