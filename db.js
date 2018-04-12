// db.js
var mongoose = require('mongoose');

mongoose.useMongoClient
mongoose.connect('mongodb://project2:geraldo@cluster0-shard-00-00-lg1pg.mongodb.net:27017,cluster0-shard-00-01-lg1pg.mongodb.net:27017,cluster0-shard-00-02-lg1pg.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
    .then(function (data) {

}).catch(function (error) {
    console.log("Mongodb connection failed.  Error is: " + error)
});