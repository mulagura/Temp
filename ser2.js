// An object of options to indicate where to post to
var http = require("http");

http.createServer(function(req,res)
{
  res.writeHead(200,{"content-type":"text/html"});
  res.write("Hi");
  res.end();
}).listen(1234);

console.log("server running on localhost:1234");

  var post_options = {
      host: 'localhost',
      port: '1234',
      path: '/',
      method: 'POST',

  };

  // Set up the request
  var post_req = http.request(post_options, function(res) {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
          console.log('Response: ' + chunk);
      });
  });
