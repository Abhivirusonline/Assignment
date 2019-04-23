let jsonHeader=(res)=>{
	res.writeHead(200,{
		'Content-Type':'application/json',
	    'Access-Control-Allow-Origin':'*',
	    'Access-Control-Allow-Header':'*',
	    'Access-Control-Allow-Methods':'*'	
	})
}
let htmlHeader=(res)=>{
	res.writeHead(200,{
		'Content-Type':'text/html',
	    'Access-Control-Allow-Origin':'*',
	    'Access-Control-Allow-Header':'*',
	    'Access-Control-Allow-Methods':'*'	
	});
}
module.exports={
	jsonHeader,
	htmlHeader
}