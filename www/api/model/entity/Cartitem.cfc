component persistent="true" table="cartitems" {
	property name="id" generator="identity" ormtype="int";
	property name="cart" fieldtype="many-to-one" cfc="Cart";

	property name="product" fieldtype="many-to-one" cfc="Product" fkcolumn="productid";
	property name="productName" ormtype="string" default="";

	property name="quantity" ormtype="int" default="0";
	property name="priceDollar" ormtype="big_decimal" precision="7" scale="2" default="0.0";
	property name="pricePoint" ormtype="int" default="0";

	property name="dateCreated" ormtype="timestamp" default="1900-01-01";
	property name="dateModified" ormtype="timestamp" default="1900-01-01";

	function getTotalDollar() {
		return getQuantity() * getPriceDollar();
	}
}
