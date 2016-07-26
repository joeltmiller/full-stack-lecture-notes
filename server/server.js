//Req
var express = require('express');
var index = require('./routes/index');
var bodyParser = require('body-parser');

//My Vars
var app = express();

app.use(express.static('server/public'));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//Routes
app.use('/', index);


var server = app.listen(3000, handleServerStart);

function handleServerStart() {
  var port = server.address().port;
  console.log('Listening on port', port);
}
