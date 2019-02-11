var http = require("http");
var MongoClient = require("mongodb").MongoClient;

//create a http server
http.createServer(function(req,res)
{
  res.writeHead(200,{'content-type':'text/plain'});
  res.write("CRUD operations in mongodb");


  var data = {
    number1 : '23',
    number2 : '12'
  };

  //create connection with mongodb
  var url = "mongodb://localhost/ram";
  MongoClient.connect(url,function(err,db)
  {
    if (err) console.error(err);
    console.log("Connected with mongodb");

  //   db.createCollection("customers", function(err, res) {
  // if (err) throw err;
  // console.log("Table created!");
  // //db.close();
  // });

    //create
        db.collection('customers').insert(data,function(err,insert)
          {
            if (err) console.error(err);
            else {
              console.log("Inserted data is:",insert);
                db.close();
            }
          });

        });

res.end();

}).listen(1234);
