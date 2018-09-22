<cfscript>
	// dump CF json into an angular component:

	cfData = {
		upc = "1234567890",
		"productName" = "Fancy Shampoo",
		"customerName" = "Michael O'Shea",
		"price" = 99.99,
		"quantity"=1,
		"isDiscounted" = false,
		"date" = [2018, 12, 31]
	};
	//The datatype values are string, numeric, integer, boolean, date, array, and struct.
	metadata = {firstname: {type:"string"}, upc: {type: "numeric"}};
  cfData.setMetadata(metadata);
</cfscript>


<html>
	<head>
	<title>In a Pinch</title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>
	<script>
	angular.module('app', []);
/*	angular.module('app').component('InAPinch', {
		bindings: {testdata: '<'},
		template: '<p>Your data is: {{$ctrl.testdata | json}}</p>',
		controller: function() {}
	}); */
	</script>
	<script>
		angular.module('app').component('inAPinch', {
			bindings: { textIn: '<', myFred: '@' },
			template: '<p>Your data is: <pre>{{$ctrl.textIn | json}}</pre>, fred= {{$ctrl.myFred}}</p>'
			, controller: function() {
				this.dataIn = {};
				this.$onInit = function() {
					console.log(this.textIn);
					this.dataIn = this.textIn;
				}
			}
		});
		</script>
		</head>
	<body>
		<h1>Quickly Dump CF Data to Angular</h1>
		<h2>with serializeJSON()</h2>
		<div ng-app="app">
		<in-a-pinch text-in='<cfoutput>#Replace(serializeJSON(cfData), "'", " ", "all")#</cfoutput>' my-fred="myfred"></in-a-pinch>
		</div>
	</body>
</html>
