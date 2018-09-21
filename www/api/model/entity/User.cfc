component persistent="true" table="users" {
	property name="id" generator="identity" ormtype="int";
	property name="lastname" ormtype="string" default="";
	property name="firstname" ormtype="string" default="";

	property name="password" ormtype="string" default="";

	property name="dateCreated" ormtype="timestamp" default="1900-01-01";
	property name="dateModified" ormtype="timestamp" default="1900-01-01";

}
