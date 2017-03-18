var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyparser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());

app.get('/contactList',function(req,res){
   console.log('I got the request for contackList')
   db.contactlist.find(function(error,data){
    console.log(data);
    res.json(data);
   });
    
});

app.get('/contactList/:id',function(req,res){
   var id = req.params.id;
   db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(error,data){
    console.log(data);
    res.json(data);
   });
    
});


app.post('/contactList',function(req,res){
   console.log('Post request');
   console.log(req.body);  
   db.contactlist.insert(req.body,function(error,doc){
     res.json(doc);
   });  
});

app.put('/contactList/:id',function(req,res){
    var id = req.params.id;
   console.log(id);
   db.contactlist.findAndModify(
        { query : {_id:mongojs.ObjectId(id)},
          update : { $set :{name:req.body.name,email:req.body.email,mobileno:req.body.mobileno}},
          new: true
        },function(error,data){
            res.json(data);
        });

});

app.delete('/contactList/:id',function(req,res){
   console.log('delete request');
   var id = req.params.id;
   console.log(req.params.id);  
   db.contactlist.remove({_id:mongojs.ObjectId(id)},function(error,doc){
     res.json(doc);
   });
    
});

app.listen(3000);
console.log('Server is running on port 3000');