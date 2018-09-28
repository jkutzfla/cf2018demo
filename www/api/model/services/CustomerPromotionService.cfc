/**
 * Sample code, will not run.
 * /api/model/services/CustomerPromotionService.cfc
 */
component accessors="true" {
	property UserService;
	property ProductService;
	property CartService;

	Boolean function checkUserProductPromo(Numeric userid, String productname) {
		var user = variables.UserService.get(userid);
		var product = variables.ProductService.getByName(productname);

		var cart = variables.UserService.getCartByUser(user);
		var cartItems = cart.getItemnames();
		//new functionality:
		var promotionList = ['Promo Shampoo', 'Promo Conditioner']; //demo
		//&& cart.getItemnames().contains(product) && user.isVIP() )
		if ( promotionList.contains(product.getName()) 
			&& cartItems.contains(product.getName())
			&& user.isVIP() ) {
			return true;
		}

		return false;
	}
}
