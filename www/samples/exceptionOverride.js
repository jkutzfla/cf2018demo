// File misc/exceptionOverride.js
var mod = angular.module('exceptionOverride', []);
mod.config(function ($provide) {
	$provide.decorator("$exceptionHandler", ['$delegate', '$injector', function ($delegate, $injector) {
		return function (exception, cause) {
			var $http = $injector.get("$http");
			var $log = $injector.get("$log");
			var registration = $injector.get("Registration");
			registration.account.contacts = ['Snipped']; //dont need these filling the error log.
			console.log("Registration", registration);
			//also, exception.message, .fileName, .lineNumber
			var data = { 
				exception: exception.toString(), 
				message : exception.msg,
				stack: (exception.stack) ? exception.stack : 'No Stacktrace Found',
				cause: cause, 
				registration: registration,
				attendees: registration.getAttendees(),
				source:'exceptionOverride.js' 
			};
			//want to only log non-http errors.
			var exception_text = exception.toString();
			if (exception_text.indexOf("$http") == -1) {
				$http.post('error.cfm', data);
			}
			console.log('Angular Exception Caught', exception_text);
			$log.warn(exception, cause);
		}
	}]);
});

/*
angular.
	module('exceptionOverride', []).
		factory('$exceptionHandler', ['$log', 'logErrorsToBackend', function($log, logErrorsToBackend) {
		return function myExceptionHandler(exception, cause) {
			console.log('Angular Error Caught!');
			//logErrorsToBackend(exception, cause);
			$log.warn(exception, cause);
		};
	}]);


angular.
	module('exceptionOverride').
		factory('logErrorsToBackend', [function() {
			myLog.$inject = ['$http'];
			function myLog(exception, cause, $http) {
				var data = {exception:exception, cause:cause};
				$http.post('error.cfm', data);
			};
			return myLog;
		}]);
*/
