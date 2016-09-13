'use strict';

var port = process.env.PORT || 51112;

var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

app.use('/', express.static(path.resolve(__dirname + "/../public")));
app.get('/', function(request, response) {
    response.sendFile(path.resolve(__dirname + "/../public" + '/index.html'));
});

http.listen(port, function() {
    console.log('listening on *:' + port);
});
