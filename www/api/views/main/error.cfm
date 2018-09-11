<cfheader statuscode="500" statustext="Internal Server Error">
<cfset errorFormat = "html">
<cfif request.keyExists("customMethod") AND request.customMethod eq "ajax">
	<cfset errorFormat = "text">
</cfif>
<cfset rc.title = "Error">
<cfif isdefined("request.exception.RootCause")>
	<cfset rc.title &= " " & request.exception.rootcause.message>
</cfif>

<cfdump var="#request.exception#" label="request.exception" format="#errorFormat#" top="2">

<cfdump var="#rc#" label="rc" format="#errorFormat#" top="2">
