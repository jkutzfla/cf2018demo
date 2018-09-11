component persistent="true" table="users" {
	property name="id" generator="identity" ormtype="int";
	property name="lastname" ormtype="string";
	property name="firstname" ormtype="string";
}
