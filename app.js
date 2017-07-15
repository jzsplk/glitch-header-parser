//basic required import for NodeJs
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
//get call to return JSON that format natural and unix data
var api = '/api/whoami';
app.get(api, function(req, res, next){
  console.log('url works');
  var language = req.acceptsLanguages();
  var software = req.get('User-Agent');
  var ipaddress = req.ip;
  res.json({'ipaddress ': ipaddress, 'language ': language[0], 'software': software}, );
});

app.listen(3000, function(){
    console.log("It's working");
});
