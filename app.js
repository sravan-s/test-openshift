var express = require('express');
var app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(server_port, function () {
  console.log('Example app listening on port 3000!');
});

