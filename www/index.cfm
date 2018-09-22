<cfoutput>
<h1>Demo Server</h1>

<ul>
	<li><a href="/api/">API home</a></li>

	<li><a href="/samples/demo1.cfm">cfm sample 1</a></li>

	<li><a href="/ngCart/ng1cart.cfm">cfm Angular.js cart demo</a></li>

	<li><a href="/samples/in_a_pinch.cfm">cfm sample in-a-pinch</a></li>
</ul>


<hr size="1">
<div>
	<cfif server.keyExists("coldfusion")>
		CF Version: #server.coldfusion.productversion#
	</cfif>
</div>
</cfoutput>
