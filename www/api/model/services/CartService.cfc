component accessors="true" {
	property ProductService;

	Array function list() {
		return EntityLoad("Cart");
	}

	entity.Cart function get(Numeric id) {
		var c = EntityLoadByPK("Cart", id);
		var items = c.getItems();
		if (isNull(items)) {
			items = [];
		}
		items.each( function(i) {
			i.productId = i.getProduct().getId();
			i.totalDollar = i.getTotalDollar();
		});
		c["items"] = items;
		return c;
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
		var product = variables.ProductService.get(productId);
		ci.setCart(c);
		ci.setProduct(product);
		ci.setProductName(productName);
		ci.setQuantity(quantity);
		ci.setPriceDollar(price);
		transaction {
			EntitySave(ci);
		}
		c.addItem(ci);
		recalculateCart(c);
		transaction {
			EntitySave(c);
		}
		return ci;
	}

	entity.Cartitem function getItem(Numeric id) {
		return EntityLoadByPK("Cartitem", id);
	}

	entity.Cartitem function updateItem(Numeric cartitemid, Numeric productId, String productName, Numeric quantity, Numeric price) {
		var ci = EntityLoadByPK("Cartitem", cartitemid);
		var product = variables.ProductService.get(productId);
		ci.setProduct(product);
		ci.setProductName(productName);
		ci.setQuantity(quantity);
		ci.setPriceDollar(price);
		transaction {
			EntitySave(ci);
		}
		var c = ci.getCart();
		recalculateCart(c);
		transaction {
			EntitySave(c);
		}
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

	Date function getLastUpdate() {
		var sql = "select max(dateModified) AS dateModified from carts";
		var result = queryExecute(sql);
		if (result.recordcount eq 1) {
			return result.dateModified;
		}
		return "1900-01-01";
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
