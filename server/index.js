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

app.get('/addBook/:isbn', function (request, response) {
  http.get('http://isbndb.com/api/v2/json/DAEM28V1/book/' + request.params.isbn, function (res) {
    var body = '';
    res.on('data', function (d) {
      body += d;
    });
    res.on('end', function () {
      var parsed = JSON.parse(body);
      var title = parsed.data[0].title;
      response.json({ title: title, id: request.params.isbn });
    });
  }).end();
});

httpServer.listen(port, function () {
  console.log('listening on *:' + port);
});
