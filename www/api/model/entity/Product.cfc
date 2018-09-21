component persistent="true" table="products" extends="AbstractEntity" {
	property name="id" generator="identity" ormtype="int";

	property name="name" ormtype="string" length="255" default="";

	property name="priceDollar" ormtype="big_decimal" precision="7" scale="2" default="0.0";
	property name="pricePoint" ormtype="int" default="0";

	property name="category" ormtype="string" default="";

	property name="dateCreated" ormtype="timestamp" default="1900-01-01";
	property name="dateModified" ormtype="timestamp" default="1900-01-01";

}
