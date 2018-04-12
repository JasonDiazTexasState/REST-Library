// app.js
var express = require('express');
var app = express();
var cors = require('cors')
var db = require('./db');

var BookController = require('./book/bookcontroller');
app.use(cors);
app.use('/books', BookController);

module.exports = app;

