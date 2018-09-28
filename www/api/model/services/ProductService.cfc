component accessors="true" {
	Array function getAll() {
		return EntityLoad("Product");
	}

	entity.Product function get(numeric id) {
		return EntityLoadByPK("Product", id);
	}
}
