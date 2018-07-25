var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output" : "Hello World!!!!!!!!!33333333333"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output" : "Hello World!~~~~"
  });
});

app.listen(port);
module.exports = app;
