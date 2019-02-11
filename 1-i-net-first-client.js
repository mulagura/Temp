var net = require("net");

var client = net.connect({port:1234},function()
{
  console.log("gonna connct to server...connected to server!");
  client.write("hello Ram testing msg from client");
});

client.on('data',function(data)
{
  console.log(data.toString());
  client.end();
});

client.on('end',function()
{
  console.log("disconected from server");
});
