component extends=framework.one {
	this.name="Demo API";
	this.sessionManagement = false;

	variables.framework = {
		diLocations = "./model/services", // ColdFusion ORM handles Beans
		generateSES=false,
		SESOmitIndex=true,
		decodeRequestBody = true,
		preflightOptions=true, //this turns OPTIONS on, need to work on CORS
		routes = new Routes().getRoutes()
	};

	this.mappings['/entity'] = getDirectoryFromPath(getCurrentTemplatePath()) & "model\entity";

	this.datasource = "cf2018demo";
	this.ormEnabled = true;
	this.ormsettings = {
		dbCreate = "dropcreate",
		sqlscript = getDirectoryFromPath(getCurrentTemplatePath()) & "../../sql/populateDB.sql",
//		eventhandling= true,
//		eventhandler="com.bumble.model.GlobalEventHandler",
		secondaryCacheEnabled = false,
		logsql= false,
		savemapping = false
		// cfclocations=[getDirectoryFromPath(getCurrentTemplatePath()) & "model\beans", getDirectoryFromPath(getCurrentTemplatePath()) & "..\..\libraryroot\customtags\com\bumble\model"]
	};

	variables.framework.environments = {
		development = { reloadApplicationOnEveryRequest = true, trace=true	},
		production = { reloadApplicationOnEveryRequest = false, trace = false }
	}

	public String function getEnvironment() { //part of FW/1
		return "development";
		//var confEnv = application.config.getProperty("default", "environment");
		//default to development if conf is empty:
		//return confEnv eq "" ? "development" : confEnv;
	}

	public function setupRequest() {
		if (url.keyExists("ormreload")) {
			ormreload();
		}
		// variables.framework.routes = [{"$GET/v1/authenticate" = "/apisecurity/authenticate"}];
		if(structKeyExists(url, "init")) { // use index.cfm?init to reload ORM
			onApplicationStart();
			setupApplication();
			ormReload();
			location(url="/mvc/",addToken=false);
		}
	}
}
