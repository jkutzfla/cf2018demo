component accessors="true" {
	property framework;
	property ProductService;

	function list(struct rc) {
		var products = variables.ProductService.getAll();

		variables.framework.renderData().data(products).type("json");
	}
}
