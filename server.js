var express = require('express');
var app = express();
/*
app.get('/', function(req, res){
	res.send('server got started');
});*/

app.use(express.static(__dirname + '/public'));

app.get('/contactList', function(req, res){
	console.log('I have received a GET request');
	person1 = {
		'name' : 'Narendra',
		'email' : 'test1@email.com',
		'contact' : '111-111-1111'
	},
	person2 ={
		'name' : 'Rajesh',
		'email' : 'test2@email.com',
		'contact' : '111-111-1111'
	},
	person3 ={
		'name' : 'Hari',
		'email' : 'test3@email.com',
		'contact' : '111-111-1111'
	}
	var contactList = [person1, person2, person3];
	res.json(contactList);

});

app.listen(5000);
console.log('server is listening to port 5000 ..');