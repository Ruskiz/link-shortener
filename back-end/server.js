const express = require("express");
const bodyParser = require("body-parser");
const mongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
  
const app = express();
const jsonParser = bodyParser.json();
const url = "mongodb://localhost:27017/usersdb";
  
app.use(express.static(__dirname + "../front-end/src/index.html"));
app.get("/api/users", function(req, res){
       
    mongoClient.connect(url, function(err, client){
        client.db("usersdb").collection("users").find({}).toArray(function(err, users){
            res.send(users)
            client.close();
        });
    });
});
app.get("/api/users/:id", function(req, res){
       
    var id = new objectId(req.params.id);
    mongoClient.connect(url, function(err, client){
        client.db("usersdb").collection("users").findOne({_id: id}, function(err, user){
              
            if(err) return res.status(400).send();
              
            res.send(user);
            client.close();
        });
    });
});
  
app.post("/api/users", jsonParser, function (req, res) {
      
    if(!req.body) return res.sendStatus(400);
      
    var userEmail = req.body.email;
    var userPassword = req.body.password;
    var user = {email: userEmail, password: userPassword};
      
    mongoClient.connect(url, function(err, client){
        client.db("usersdb").collection("users").insertOne(user, function(err, result){
              
            if(err) return res.status(400).send();
              
            res.send(user);
            client.close();
        });
    });
});
   
app.put("/api/users", jsonParser, function(req, res){
       
    if(!req.body) return res.sendStatus(400);
    var id = new objectId(req.body.id);
    var userEmail = req.body.email;
    var userPassword = req.body.password;
      
    mongoClient.connect(url, function(err, client){
        client.db("usersdb").collection("users").findOneAndUpdate({_id: id}, { $set: {password: userPassword, email: userEmail}},
             {returnOriginal: false },function(err, result){
              
            if(err) return res.status(400).send();
              
            var user = result.value;
            res.send(user);
            client.close();
        });
    });
});
   
app.listen(3000, function(){
    console.log("Сервер подключен...");
});