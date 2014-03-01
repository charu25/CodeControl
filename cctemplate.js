var express = require('express');
var app     = express();

app.use(express.bodyParser());

app.post('/', function(req, res) {
  var username=req.body.name;
  var password=req.body.password;

  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  MongoClient.connect('mongodb://localhost:6331/mydb', function(err, db) {
    if(err) throw err;

    var collection = db.collection('testData');
    

    


      collection.find({name:username}).toArray(function(err, results) {
        if(results[0]){
          if(results[0]['pass']!=password){

            res.redirect(__dirname + "/./login.html");
          }

          else{
            res.redirect(__dirname + "/./template.html");
          }

        }

        else{
          res.redirect(__dirname + "/./login.html");
        }

        
        db.close();
      });

      
    
  })
  
  

});




app.listen(3000, function() {
  console.log('Server running at port 3000');
});