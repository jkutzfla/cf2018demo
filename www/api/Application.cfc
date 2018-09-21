component extends=framework.one {
	this.name="Demo API";
	this.sessionManagement = false;

	//default is false.
	this.serialization.preserveCaseForStructKey = true;

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
		eventhandling= true,
		eventhandler="entity.GlobalEventHandler",
		secondaryCacheEnabled = false,
		logsql= false,
		savemapping = false
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

		//do a basic CORS support
		//if () {add header: Access-Control-Allow-Origin #host#}
		if (ReFindNoCase("bumbleandbumble.com|bumbletraining.com", CGI.REMOTE_HOST)
			|| getEnvironment() != "Production") {
			var response = getPageContext().getResponse();
			response.setHeader("Access-Control-Allow-Origin","*");
		}

		var rd = GetHttpRequestData();
		if ( rd.keyExists("headers") && rd.headers.keyExists("X-Requested-With")) {
			if (rd.headers["X-Requested-With"] == "XMLHttpRequest") {
				request.layout = false;
				request.customMethod = "XMLHttpRequest";
				disableFrameworkTrace();
			}
		} else {
			request.customMethod = "";
		}

		sleep(200);
	}
	public function onError( any exception, string event ) {
		//writeLog(text="onError event=#event#, rc.action=#getFullyQualifiedAction('')#", file="FW1Error");
		writeLog(text="#exception.stacktrace#", file="FW1Error");
		super.onError(exception, event);
	}
}
