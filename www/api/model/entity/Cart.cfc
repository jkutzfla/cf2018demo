component persistent="true" table="carts" extends="AbstractEntity" {
	property name="id" generator="identity" ormtype="int";
	property name="name" ormtype="string" default="" length="40";
	property name="items" fieldtype="one-to-many" cfc="Cartitem" singularname="item" type="array" fkcolumn="cartid" inverse="true";
	property name="user" fieldtype="many-to-one" fkcolumn="userid" cfc="User";
	property name="adminUser" fieldtype="many-to-one" fkcolumn="adminuserid" cfc="User";

	property name="totalDollar" ormtype="big_decimal" precision="7" scale="2" default="0.0";
	property name="totalPoint" ormtype="int" default="0";

	property name="dateCreated" ormtype="timestamp" default="1900-01-01";
	property name="dateModified" ormtype="timestamp" default="1900-01-01";
}
