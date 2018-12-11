/*******
 *
 * Import all the node module
 *   
 ********/
/*
 ***@ Core node module 
 */
var express = require('express');
var http = require('http');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

/*
 *** Parse all form data 
 */
app.use(bodyParser.urlencoded({extended: true}));

/*
 ***@ Used for faormating dates 
 */
var dateFormat = require('dateformat');
var now = new Date();

/*
 * 
 * This is view engie  
 * Template parsing
 * We are using EJS types
 */
app.set('view engine', 'ejs');

/****
 * 
 * Import all related JavaScript and css files to enject in our app
 * 
 ****/
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/tether/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

/***
 * 
 * Connect to the server
 * 
 ***/
var server = app.listen(4000,function(){
   console.log("Server started on 4000..."); 
});
 