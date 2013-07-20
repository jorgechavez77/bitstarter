var fs = require('fs');

var index = fs.readFileSync('index.html');

var str = index.toString();

var express = require('express');

var app = express.createServer(express.logger());

console.log("dir_name: " + __dirname);

app.use(express.static(__dirname + '/videos/'));
app.use(express.static(__dirname + '/images/'));

var vidStreamer = require("vid-streamer");

app.get('videos/', vidStreamer);

app.get('/', function(request, response) {
  response.send(str);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
