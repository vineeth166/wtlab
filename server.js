var http=require("http"); //Import node js core module

//Creating server

function samp(request, response)

{

//Handling incoming request
if(request.url=="/"){

response.writeHead(200,{"Content-Type":"text/html"}); 
response.write("Hello");

response.write("<h1>Hello World</h1>");

response.end("<html><body>Home, URL was: "+request.url+"</body></html>"); 
}
else if(request.url=="/student"){
    response.writeHead(200,{"Content-Type":"text/html"}); 
response.write("Hello");
response.write("<h1>Hello Student</h1>");
response.end("<html><body>student, URL was: "+request.url+"</body></html>"); 
}
else if(request.url=="/admin"){
    response.writeHead(200,{"Content-Type":"text/html"}); 
response.write("Hello");

response.write("<h1>Hello Admin</h1>");

response.end("<html><body>admin, URL was: "+request.url+"</body></html>"); 
}
else{
    response.writeHead(200,{"Content-Type":"text/html"}); 
response.write("Invalid request");
}
}
console.log("request received");
var server=http.createServer(samp);
server.listen(8000);                                                                            