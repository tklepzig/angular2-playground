'use strict';

var port = process.env.PORT || 51112;

var express = require('express');
var app = express();
var http = require('http')
var httpServer = http.Server(app);
var path = require('path');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(path.resolve(__dirname + "/../public")));
app.get('/', function (request, response) {
  response.sendFile(path.resolve(__dirname + "/../public" + '/index.html'));
});

app.get('/test', function (request, response) {
  response.json({ title: 'Hello!', id: "42" });
});

httpServer.listen(port, function () {
  console.log('listening on *:' + port);
});

// http.get('http://isbndb.com/api/v2/json/DAEM28V1/book/9780137081073', function (res) {
//   res.on('data', function (data) {
//     console.log(JSON.parse(data).data[0].title);
//   });
// }).end();