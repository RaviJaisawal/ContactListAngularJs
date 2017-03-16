var express = require('express');
var app = express();


app.use(express.static(__dirname + "/public"));

app.get('/contactList',function(req,res){
   console.log('I got the request for contackList')
   var person1 = {
     		name:'ravi',
     		email:'j.ravi786@gmail.com',
     		mobileno:'9665470598'

     	};

     	var person2 = {
     		name:'Kavi',
     		email:'j.kavi786@gmail.com',
     		mobileno:'9665470598'

     	};

     	var person3 = {
     		name:'Aavi',
     		email:'j.aavi786@gmail.com',
     		mobileno:'9665470598'

     	};
   
    var contactList = [person1,person2,person3];

    res.json(contactList);
});
app.listen(3000);
console.log('Server is running on port 3000');