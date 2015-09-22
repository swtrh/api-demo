
var http = require('http');
var path = require('path');

var express = require('express');

var routes = require("./app/routes.js");

var config = require("./app/config.js");

var router = express();

router.get('/api/people', routes.getAllPeople);

var server = http.createServer(router);

server.listen(config.port, config.ip, function(){
  var addr = server.address();
  console.log("Api-demo server listening at", addr.address + ":" + addr.port);
});
