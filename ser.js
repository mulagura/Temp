var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
  var data = "Ram";
}).listen(1234);

console.log(data);
