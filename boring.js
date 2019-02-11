var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res)
{
  res.writeHead(200,{'Content-Type':'text/html'});
  res.end();
}).listen(1234);

// var options = {
//   host:'http://localhost',
//   port:1234,
//   path:'/Downloads/1-h-http-req-res.html'
// };

var req = http.get('/index2.html', function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();
