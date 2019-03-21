var express = require('express');
var port = process.env.PORT || 5000;
var app = express();
var mp3 = require('./util/convertor.js');

app.get('/', function(req, res){
  res.setHeader('Content-Type', 'application/json');
  res.send(mp3.getMP3(req.query));
});
console.log('The app is running at PORT : ' + port);
app.listen(port);
