var express = require('express');
var app     = express();

app.use(express.bodyParser());

app.post('/', function(req, res) {
  //res.send('You sent the name "' + req.body.name + '".');
  var username=req.body.name;
  var password=req.body.pass;
  var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
    ReplSetServers = require('mongodb').ReplSetServers,
    ObjectID = require('mongodb').ObjectID,
    Binary = require('mongodb').Binary,
    GridStore = require('mongodb').GridStore,
    Grid = require('mongodb').Grid,
    Code = require('mongodb').Code,
    BSON = require('mongodb').pure().BSON,
    assert = require('assert');
  
  var mongoclient = new MongoClient(new Server("localhost", 27017), {native_parser: true});

  // Open the connection to the server
  mongoclient.open(function(err, mongoclient) {

  
  
  var db = mongoclient.db("mydb");
  var collection = db.collection('testData');

  
  collection.findOne({name:username}).pass;
  if(pass==password){
    res.send("yola");
    console.log("yo");
  }
   
    });
});




app.listen(3000, function() {
  console.log('Server running at port 3000');
});