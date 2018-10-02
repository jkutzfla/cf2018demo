<html>
<head>
	<title>Demo Server - ColdFusion Summit 2018 Josh Kutz-Flamenbaum</title>
	<style> .section {padding-bottom: 10px;} </style>
</head>
<body>
<cfoutput>
<h1>Demo Server</h1>

<div style="padding-left: 20px;">

<div class="section">API
	<ul>
		<li><a href="/api/" target="_blank">API home</a></li>
	</ul>
</div>
	<div class="section">Demo Application
	<ul>
	<li><a href="/ngShop/" target="_blank">Angular.js - Shopping Cart demo</a></li>

	<li><a href="http://localhost:4201/" target="_blank">Angular v6 - Shopping Cart Demo - DEV</a></li>
	<li><a href="/ng6Shop/index.html" target="_blank">Angular v6 - Shopping Cart Demo - PRODUCTION Build</a></li>
	<li><a href="/ng6Shop/DEV/index.html" target="_blank">Angular v6 - Shopping Cart Demo - DEV Build</a></li>
	</ul>
</div>

<div class="section">CF to Angular Example
	<ul>
	<li><a href="/samples/in_a_pinch.cfm" target="_blank">cfm sample in-a-pinch</a></li>
	</ul>
</div>

<div class="section">Angular.js Examples
	<ul>
	<li><a href="/samples/ngAnimate.html" target="_blank">Angular.js Animation Example (ng-animate-swap directive)</a></li>

	<li><a href="/samples/ngCartQuickEdit/ng1cart.html" target="_blank">Angular.js ng-model live edit example</a></li>
</ul>
</div>

<div class="section">Misc.
<ul>
	<li><a href="/samples/demo1.cfm">Test of cfm</a></li>
</ul></div>

</div>

<hr size="1">
<div>
	<cfif server.keyExists("coldfusion")>
		CF Version: #server.coldfusion.productversion#
	</cfif>
</div>
</cfoutput>
</body>
</html>
