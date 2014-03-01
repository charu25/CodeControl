var express = require('express');
var app     = express();

app.use(express.bodyParser());

app.post('/', function(req, res) {
  //res.send('You sent the name "' + req.body.name + '".');
  var username=req.body.name;
  var password=req.body.pass;
  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  MongoClient.connect('mongodb://127.0.0.1:3000/mydb', function(err, db) {
      if(err) throw err;

  var collection = db.collection('testData');
  console.log(collection.findOne({name:username}));

  
  collection.findOne({name:username}).pass;
  if(pass==password){
    res.send("yola");
  }
   
    });
});




app.listen(3000, function() {
  console.log('Server running at port 3000');
});