var
	nodeStatic		= require("node-static")
,	http			= require("http")
,	port			= 4050
,	server			= new nodeStatic.Server("../../", {cache: 1})
;

http.createServer(function(req, res) {
	
	req.addListener("end", function() {
		server.serve(req, res);
	});
	
}).listen(port);

console.log("### Word is born. Heartbeat test running at http://localhost:" + port);