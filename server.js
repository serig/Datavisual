var express = require('express');
var path = require('path');
var http = require('http');
//var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');


 var db = mongojs('HitperDay',['hit']);


// var  dataFields = {'_id': false, 'school_state': true, 'resource_type': true, 'poverty_level': true, 'date_posted': true, 'total_donations': true, 'funding_status': true, 'grade_level': true};

var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get("/HitperDay/hit", function(req, res){
		
		db.hit.find(function(err, subjectDetails) {
   // if there is an error retrieving, send the error. 
       // nothing after res.send(err) will execute
            if (err) 
            res.send(err);
            res.json(subjectDetails); // return all nerds in JSON format
      });
      console.log("I receive a GET request");
	});

app.listen(3000);
console.log('Express server listening on port 3000');

