component accessors="true" {
	property framework;

	function apistatus(Struct rc) {
		var status = {"hello"="world"};
		variables.framework.renderData().data(status).type("json");

	}
}
