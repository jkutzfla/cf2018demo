component accessors="true" {

	Array function list() {
		return EntityLoad("Cart");
	}

	entity.Cart function get(Numeric id) {
		return EntityLoadByPK("Cart", id);
	}

	entity.Cart function create(String name) {
		var c = EntityNew("Cart");
		c.setName(arguments.name);
		transaction {
			EntitySave(c);
		}
		return c;
	}

	entity.Cartitem function addItem(entity.Cart c, Numeric productId, String productName, Numeric quantity, Numeric price) {
		var ci = entityNew("Cartitem");
		ci.setCart(c);
		ci.setProductName(productName);
		ci.setQuantity(quantity);
		ci.setPriceDollar(price);
		transaction {
			EntitySave(ci);
		}
		recalculateCart(c);
		return ci;
	}

	Boolean function delete(Numeric id) {
		var cart = get(id);
		transaction {
			ormExecuteQuery("delete from Cartitem where cart.id=:id", {id=cart.getId()});
			EntityDelete(cart);
		}
		return true;
	}

	private function recalculateCart(entity.Cart c) {
		var items = c.getItems();
		var total = 0;
		for (var i in items) {
			total += (i.getPriceDollar() * i.getQuantity());
		}
		c.setTotalDollar(total);
	}

}
