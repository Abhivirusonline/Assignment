var http=require('http');
var fs=require('fs');
http.createServer(function(request,response){
	var data=fs.readFileSync('demofile.html');
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write(data);
	response.end();
}).listen(5001);
