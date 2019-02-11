var http = require("http");

http.createServer(function(req,res)
{
  res.writeHead(200,{"content-type":"text/html"});
  res.write("Hi");
  res.end();
}).listen(1234);

console.log("server running on localhost:1234");
