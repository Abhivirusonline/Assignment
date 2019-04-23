const http=require('http');
const port=5000;
const hostname='127.0.0.1';
const fs=require('fs');
const url=require('url');
const headerTypes=require('./headerTypes');
const userController=require('./controller/userController');
const studentController=require('./controller/studentController');
const renderHtml=require('./controller/htmlHandler');

var server=http.createServer((req,res)=>{
    let pathObject=url.parse(req.url,true);
    switch(pathObject.pathname){
    	case '/students':{
                    headerTypes.htmlHeader(res);
        			studentController.getStudents(pathObject.query,res);
                    break;
                   };
        case '/users':{
            headerTypes.htmlHeader(res);
            userController.getUsers(pathObject.query,res);
            break;
         };
         case '/Home':{
            headerTypes.htmlHeader(res);
            renderHtml.renderHtml('./public/index.html',res);
            break;
         };
         case '/About':{
            headerTypes.htmlHeader(res);
            renderHtml.renderHtml('./public/about.html',res);
            break;
         };
         case '/Contact':{
            headerTypes.htmlHeader(res);
            renderHtml.renderHtml('./public/contactus.html',res);
            break;
         };
        
         default:{
            res.end("default url")
             
         }
    }
});
server.listen(port,()=>{
    console.log(`server is running of the ${hostname}:${port}`);
});