var express = require('express');
var app = express();
/*
app.get('/', function(req, res){
	res.send('server got started');
});*/

app.use(express.static(__dirname + '/public'));

app.listen(5000);
console.log('server is listening to port 5000 ..');