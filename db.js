// db.js
var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://project2:geraldo1@cluster0-lg1pg.mongodb.net/user').then(function (data) {
    console.log(JSON.stringify(data));
}).catch(function (error) {
    console.log("Mongodb connection failed.  Error is: " + error)
});