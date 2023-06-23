var http=require('http');
const calc=require('./calc');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.writableLength("addition: "+calc.add(100,2));
    res.end();

}).listen(8000);
console.log("addition of 100,2: "+calc.add(100,2));
console.log("subtraction of 100,2: "+calc.sub(100,2));
console.log("multiplication of 100,2: "+calc.mul(100,2));
console.log("division of 100,2: "+calc.div(100,2));
