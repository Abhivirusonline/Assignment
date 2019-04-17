const http=require('http');

http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/plain'
	});
	res.end("Hello World Abhishek");
}).listen(8080);