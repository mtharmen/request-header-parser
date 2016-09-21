var express = require('express');
var app = express();

app.get('/', function(req, res){
  
  var headerInfo = {
    'ipaddress': req.headers['x-forwarded-for'],
    'language': req.headers['accept-language'].split(',')[0],
    'software': req.headers['user-agent'].split('(')[1].split(')')[0]
  };
  res.json(headerInfo);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Listening on port ', port);
});