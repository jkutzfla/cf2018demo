component accessors="true" {
	property framework;
	property UserService;

	function list(struct rc) {
		var users = UserService.getAll();
		variables.framework.renderData().data(users).type("json");
	}
}
