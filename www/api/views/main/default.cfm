/api/views/main/default.cfm
<cfoutput>
	<div>View status:
	<ul>
		<li><a href="?ormreload=1">ORMReload</a></li>
	<li><a href="#buildUrl('apistatus.status')#">API Status action</a></li>
	<li><a href="/api/status">GET /status</a></li>
	<li><a href="/api/cart/list">GET /cart/list</a></li>
	<li><a href="/api/cart/lastUpdate">GET /cart/lastUpdate</a></li>
	<li><a href="/api/products">GET /products</a></li>
</ul>
	</div>
	
	</cfoutput>
	