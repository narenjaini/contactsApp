var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList',['contactList']);
var bodyParser = require('body-parser');
/*
app.get('/', function(req, res){
	res.send('server got started');
});*/

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactList', function(req, res){
	console.log('I have received a GET request');

	db.contactList.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	});

	/*person1 = {
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
	res.json(contactList);*/

});

app.post('/contactList', function(req, res) {
	console.log(req.body);
	db.contactList.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/contactList/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactList.remove({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	})
});

app.get('/contactList/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
	db.contactList.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
		res.json(doc);
	});
});

app.put('/contactList/:id', function(req, res){
	var id = req.params.id;
	console.log(req.body.name);
	db.contactList.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: {name: req.body.name, email: req.body.email, contact: req.body.contact}},
		new: true}, function(err, doc){
			res.json(doc);
	});
});

app.listen(5000);
console.log('server is listening to port 5000 ..');