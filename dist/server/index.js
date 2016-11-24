'use strict';

var port = process.env.PORT || 51112;
var environment = 'prod';

if (process.argv.length > 2) {
    environment = process.argv[2];
}

var express = require('express');
var app = express();
var http = require('http')
var httpServer = http.Server(app);
var path = require('path');
require('colors');

if (environment !== 'prod') {
    console.log('Development mode'.bold.green);
    
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
}
else {
    console.log('Production mode'.bold.red);
}

app.use('/', express.static(path.resolve(__dirname + "/../public")));
app.get('/', function (request, response) {
    response.sendFile(path.resolve(__dirname + "/../public" + '/index.html'));
});




let books = [];
books.push({ title: "Book1", id: "1" });
books.push({ title: "Book2", id: "2" });
books.push({ title: "Book3", id: "3" });

app.put('/book/:isbn', function (request, response) {
    let isbn = request.params.isbn;
    http.get('http://isbndb.com/api/v2/json/DAEM28V1/book/' + isbn, function (res) {
        var body = '';
        res.on('data', function (d) {
            body += d;
        });
        res.on('end', function () {
            var parsed = JSON.parse(body);

            if (typeof parsed !== 'undefined' && typeof parsed.data !== 'undefined' && parsed.data.length > 0) {
                var title = parsed.data[0].title;
                response.json({ title: title, id: isbn });
            }
            else {
                response.json({ title: 'Nix gefunden', id: isbn });
            }
        });
    }).end();
});

app.get('/books', function (request, response) {

    response.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    response.header('Expires', '-1');
    response.header('Pragma', 'no-cache');
    response.json(books);
});

app.get('/book/:id', function (request, response) {
    console.log('get book with id ' + request.params.id);
});

app.delete('/book/:id', function (request, response) {
    books = books.filter(function (item) {
        return item.id !== request.params.id;
    });

    response.json({ title: "42" });
});

httpServer.listen(port, function () {
    console.log('listening on *:' + port);
});
