// app.js
var express = require('express');
var app = express();
var db = require('./db');

var BookController = require('./book/bookcontroller');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});app.use('/books', BookController);

module.exports = app;

