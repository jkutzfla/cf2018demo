/**
* Application wide event handler for ORM operations
*/
 
component implements="cfide.orm.IEventHandler"{
	public void function preLoad( any entity) {
		return;
	}
	public void function postLoad( any entity) {
		return;
	}
	
	public void function preInsert( any entity) {
		var timestamp = now();
		if ( StructKeyExists(arguments.entity, "setDateCreated")) {
			arguments.entity.setdatecreated( timestamp );
		}
		
		if ( StructKeyExists(arguments.entity, "setDateModified")) {
			arguments.entity.setdatemodified( timestamp );
		}
		return;
	}
	
	public void function postInsert( any entity) {
		return;
	}
		
	public void function preUpdate( any entity, Struct oldData) {
		if ( StructKeyExists(arguments.entity, "setDateModified")) {
			arguments.entity.setdatemodified( now());
		}
		return;
	}
	public void function postUpdate( any entity) {
		return;
	}
	
	public void function preDelete( any entity) {
		return;
	}
	public void function postDelete( any entity) {
		return;
	}
	
	public void function preFlush(any entities){};
	public void function postFlush(any entities){};
}
