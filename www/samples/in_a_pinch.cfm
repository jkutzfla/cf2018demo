<cfscript>
	// dump CF json into an angular component:

	cfData = {
		upc = "1234567890",
		"productName" = "Fancy Shampoo",
		"customerName" = "Michael O'Shea",
		"price" = 99.99,
		"quantity"=1,
		"isDiscounted" = false,
		"dateArray" = [2018, 12, 31],
		"now" = now()
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

	</script>
	<script>
		angular.module('app').component('inAPinch', {
			bindings: { textIn: '<', myFred: '@' },
			template: '<p>Your data is: <pre>{{$ctrl.textIn | json}}</pre>, fred= {{$ctrl.myFred}}</p>\
			<p>The converted date for now() is: {{$ctrl.date | date:"yyyy-MM-dd HH:mm:ss Z"}}</p>'
			, controller: function() {
				this.dataIn = {};
				this.$onInit = function() {
					console.log(this.textIn);
					this.dataIn = this.textIn;

					this.date = new Date(this.textIn.now);
				}
			}
		});

		angular.module('app').component('inAPinchEdit', {
			bindings: { textIn: '<'},
			template: '<p>Edit the data: <br>Customer Name:<br> ({{$ctrl.textIn.customerName}})<br> \
				<input ng-model="$ctrl.textIn.customerName">\
				<br>Price: {{$ctrl.textIn.price | currency}} <br>\
				<input type="number" ng-model="$ctrl.textIn.price" step=".01"></p>\
				<p><button ng-click="$ctrl.save()">Save</button></p>',
			controller: function() {
				this.save = function() {
					alert("Saving " + this.textIn.customerName + " at a price of "+ this.textIn.price);
				}
			}
		})

		</script>
		</head>
	<body>
		<h1>Quickly Dump CF Data to Angular</h1>
		<h2>with serializeJSON()</h2>
		<div ng-app="app">
		<in-a-pinch text-in='<cfoutput>#Replace(serializeJSON(cfData), "'", " ", "all")#</cfoutput>' my-fred="myfred"></in-a-pinch>

		<in-a-pinch-edit text-in='<cfoutput>#Replace(serializeJSON(cfData), "'", " ", "all")#</cfoutput>'></in-a-pinch-edit>
		</div>
	</body>
</html>
