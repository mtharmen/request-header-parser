var express = require('express');
var app = express();

//app.use('/', express.static(__dirname + '/styles'));

app.get('/:date', function(req, res){
  console.log(req.header);
  res.json(req.header);
});

app.listen(8080);