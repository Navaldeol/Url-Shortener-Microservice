'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var cors = require('cors');
var app = express();
var bodyParser= require('body-parser');
// Basic Configuration 
var port = process.env.PORT || 3000;
/** this project needs a db !! **/ 
var db= mongo.connect("mongodb+srv://deprabob:<Pimp209yea$>@freecodecampdata-myug7.mongodb.net/test?retryWrites=true", function(err,db) {
  if (err) {console.error(err) } })

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here
app.use(bodyParser.json());
app.get('/', function(req,res) {
app.use('/public', express.static(process.cwd() + '/public')) });

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  var regex= new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

// your first API endpoint... 
app.get("/api/shorturl/new", function (req, res) {
  var collection= db.collection('links')
  var Access= function(db, callback) {
    if (regex.test(req.params.url)) {
      collection.count().then(function(number) {
        var newElement= {
          original_url: req.params.url,
          short_url: "https://google.com/" + (number +1)
}
        collection.insert([newElement])
        res.json ({
          original_url: req.params.url,
          short_url: "https://google.com/" + (number + 1)
        })
      })
      } else {
        res.json({ 'error' : 'Please Fix the URL to shorten' })
    } } })



app.listen(port, function () {
  console.log('Node.js listening ...');
});