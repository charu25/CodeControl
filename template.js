var express = require('express');
var app     = express();
var cheerio=require('cheerio');
var http = require("http");


app.use(express.bodyParser());




app.get('/robot',function(req,res){
  

  var robots=[],elo=[],rank=[];
  var username=/*Name*/;
 

  var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

  MongoClient.connect('mongodb://localhost:6331/mydb', function(err, db) {
    if(err) throw err;
    
    var collection = db.collection('testData');
    
    collection.find({name:username}).toArray(function(err, results) {
      if(results[0]){
        robots=results[0]['robots'];
        elo=results[0]['elo'];
        rank=results[0]['rank'];
        }

        var i=0;
        $('div.modal-body').empty();
        while(i<robots.length){
            $('div.modal-body').append("""<h2><a href='/rules'>"""+robot[i]+"""</a></h2>
      <span class='text-info'>ELORATING: <span value='elorating'>"""+elo[i]+"""</span></span></br>
      <span class='text-info'>CURRENT RANKING: <span value='rank'>"""+rank[i]+"""</span></span></br>
      <label class='href hover'>
      <a  href='/edit'>Edit</a>
            <a  href='/disable'>Disable</a>
            <a  href='/delete'>Delete</a>
            </label>
""");
        }

        
        db.close();
      });

      
    
  })
  
      

});




app.listen(3000, function() {
  console.log('Server running at port 3000');
});