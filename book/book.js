// Book.js
var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: String
});
mongoose.model('book', BookSchema);
module.exports = mongoose.model('book');