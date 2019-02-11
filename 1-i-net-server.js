var net = require("net");

var server = net.createServer(function(connection)
{
  console.log("client connected to server");

  connection.on('data',function(data)
  {
    connection.write("Hello Ram Testing from server");
    console.log(data.toString());
    connection.end();
  });

  connection.on('end',function()
  {
    console.log("now client ois disconected");
  });

});

server.listen(1234,function()
{
  console.log("server listening at port nu,mber 1234");
});
