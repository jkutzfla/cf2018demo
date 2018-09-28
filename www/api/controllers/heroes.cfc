/**
 * this api endpoint is for the Angular6 sample application
 * https://angular.io/guide/http
 * it will not persist data unless FW/1 is running without reloadOnEveryRequest.
 */ 

component accessors="true" {
	property framework;
	this.heroes = [{id=1, name="Angular"}, {id=2, name="Super Alex"}];

	function create(Struct rc) {
		var name = rc.name ?: '';
		var newid = Round(rand() * 1000);
		var hero = {name=name, id=newid};
		this.heroes.append(hero);
		variables.framework.renderData().data(hero).type("json");
	}

	function list(struct rc) {
		var heroes = this.heroes;
		variables.framework.renderData().data(heroes).type("json");
	}
}
