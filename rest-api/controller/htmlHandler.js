let fs=require('fs');
let renderHtml=(path,res)=>{
	fs.readFile(path,(error,data)=>{
	if(error){
		res.write("file not found");
	}
	else{
		res.end(data);
	}
	});
}
module.exports={renderHtml}