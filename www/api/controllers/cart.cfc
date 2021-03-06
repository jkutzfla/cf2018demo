/**
 * FW/1 API for Josh Kutz-Flamenbaum Angular Demo
 */
component accessors="true" {
	property framework;
	property CartService;

	function list(struct rc) {
		var carts = variables.CartService.list();
		variables.framework.renderData().data(carts).type("json");
	}

	function create(struct rc) {
		var cart = rc.cart;
		var newcart = variables.CartService.create(cart.name);
		get({id=newcart.getId()});
		//var response = {cart=newcart};
		//variables.framework.renderData().data(response).type("json");
	}

	function get(struct rc) {
		var cart = variables.CartService.get(rc.id);
		var items = cart.getItems();
		if ( isNull(items) OR items.len() eq 0) {
			cart.items = [];
		} else {
			cart.items = items;
		}
		var response = {cart=cart};
		variables.framework.renderData().data(response).type("json");
	}

	function delete(struct rc) {
		var cart = variables.CartService.get(rc.id);
		variables.CartService.delete(rc.id);
		variables.framework.renderData().data(true).type("json");
	}

	function addItem(struct rc) {
		var cart = variables.CartService.get(rc.id);
		var item = rc.item;
		var newitem = variables.CartService.addItem(cart, item.productId, item.productName, item.quantity, item.priceDollar);
		
		// EntityReload will make sure the cart entity is updated to reflect new item & new total.
		EntityReload(cart);
		cart = variables.CartService.get(rc.id);
		var response = {cart=cart};
		variables.framework.renderData().data(response).type("json");
	}

	function updateItem(struct rc) {
		var cartitem = variables.CartService.getItem(rc.id);
		var item = rc.item;
		variables.CartService.updateitem(cartitem.getId(), item.productId, item.productname, item.quantity, item.priceDollar);

		var cart = cartitem.getCart();
		EntityReload(cart);
		cart = variables.CartService.get(cartitem.getCart().getId());
		var response = {cart=cart};
		variables.framework.renderData().data(response).type("json");
	}

	function removeItem(struct rc) {

	}

	function lastUpdate(struct rc) {
		var lastUpdate = variables.CartService.getLastUpdate();
		var response = {lastUpdate=lastUpdate};
		variables.framework.renderData().data(response).type("json");
	}


	function show(Struct rc) {
		var c = EntityNew("Cart");
		c.setDateCreated(now());
		//sleep(1000);
		var cJSON = c;
		//cJSON["properties"] = c.getProperties();
		cJSON["classname"] = c.getClassName();
		var d = c.getDateCreated();
		cJSON["dateCreatedArray"] = [DateFormat(d, "yyyy"), DateFormat(d, "mm"), dateFormat(d, "dd"), Timeformat(d, "HH"), Timeformat(d, "mm"), Timeformat(d, "ss"), Timeformat(d, "l"), Timeformat(d, "X")];
		variables.framework.renderData().data(cJSON).type("json");
	}
}
