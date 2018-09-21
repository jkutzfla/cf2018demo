component {
	Boolean function updateFromStruct(String fieldlist, Struct data) {
		for (var f in fieldlist.listToArray()) {
			var value = data[f];
			//sanitize data
			var method = "set#f#";
			invoke(this, method, {f=value});
		}
		return true;
	}

	Boolean function save() {
		transaction {
			EntitySave(this);
		}
		return true;
	}

	Array function getProperties() {
		var md = getMetadata(this);
		return md.properties;
	}

	String function getClassName() {
		var md = getMetadata(this);
		return md.name;
	}
}
