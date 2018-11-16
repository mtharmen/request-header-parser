var path = require('path')
var express = require('express')
var app = express()

app.use('/', express.static(path.join(__dirname, '/views')))

app.get('/api/whoami', (req, res) => {
  var headerInfo = {
    'ipaddress': req.headers['x-forwarded-for'],
    'language': req.headers['accept-language'],
    'software': req.headers['user-agent']
  }
  console.log(req.headers)
  res.json(headerInfo)
})

var port = process.env.PORT || 8080
app.listen(port, () => { console.log('Listening on port ', port) })