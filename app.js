//basic required import for NodeJs
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var useragent = require("express-useragent");

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());
//get call to return JSON that format natural and unix data
var api = '/api/whoami';
app.get(api, function(req, res, next){
  console.log('url works');
  var language = req.acceptsLanguages();
  var software = 'OS: ' + req.useragent.os + ', Browser: ' + req.useragent.browser;
  var ipaddress = req.ip;
  var ip = req.headers['x-forwarded-for'];
  res.json({'ipaddress ': ip, 'language ': language[0], 'software': software}, );
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, function(){
    console.log("It's working");
});

//|| req.headers['x-forwarded-for'] || req.connection.remoteAddress;