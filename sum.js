var http = require("http");
var url = require("url");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    var params = url.parse(request.url,true).query;

    console.log(params);
    console.log(url);

    var a = params.number1;
    var b = params.number2;

    var numA = new Number(a);
    var numB = new Number(b);

    var sum = new Number(numA + numB).toFixed(0);

    response.write(sum);
      response.end();
  //  //create connection with mongodb
  //   var urls = "mongodb://localhost/ram";
  //   MongoClient.connect(url,function(err,db)
  //   {
  //     if (err) console.error(err);
  //     console.log("Connected with mongodb");
   //
  //     db.createCollection("customers", function(err, res) {
  //   if (err) throw err;
  //   console.log("Table created!");
  //   db.close();
  //   });
   //
  //     //create
  //         db.collection('customers').insertOne(params,function(err,insert)
  //           {
  //             if (err) console.error(err);
  //             else {
  //               console.log("Inserted data is:",insert);
  //                 db.close();
  //             }
  //           });
   //
  //         });


}).listen(1234);

//console.log(params);
