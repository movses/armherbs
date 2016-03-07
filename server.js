var express = require('express');
var app = express();
var fs = require('fs');

var public = '/public/';
var herbs_path = parent + 'herbs/';

app.use(express.static(__dirname + parent));

app.get('/oregano', function (req, res) {
  fs.readFile( __dirname + '/' + herbs_path + "oregano.html", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

app.get('/basil', function (req, res) {
  fs.readFile( __dirname + herbs_path + "basil.html", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

app.get('/under-construction', function (req, res) {
    fs.readFile( __dirname + herbs_path + "under-construction.html", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

app.get('/', function (req, res) {
  fs.readFile( __dirname + parent + "index.html", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})


var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("listening at http://%s:%s", host, port)

})
