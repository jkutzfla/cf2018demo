/api/views/main/default.cfm
<cfoutput>
	<div>View status:
	<ul>
		<li><a href="?ormreload=1">ORMReload</a></li>
	<li><a href="#buildUrl('apistatus.status')#">API Status action</a></li>
	<li><a href="/api/index.cfm/status">GET /status</a></li>
	<li><a href="/api/index.cfm/users">GET /users</a></li>
</ul>
	</div>
	
	</cfoutput>
	