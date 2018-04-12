// BookController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var Book = require('./book');

// CREATES A NEW BOOK
router.post('/', function (req, res) {
    Book.create({
            title: req.body.title,
            pages: req.body.pages,
            author: req.body.author
        },
        function (err, book) {
            if (err) {
                return res.status(500).send("There was a problem adding the information to the database.");
            }
            res.status(200).send(book);
        });
});

// RETURNS ALL THE BOOKS IN THE DATABASE
router.get('/', function (req, res) {
    Book.find({}, function (err, books) {
        if (err) {
            return res.status(500).send("There was a problem finding the books.");
        }
        res.status(200).send(books);
    });
});


// GETS A SINGLE BOOK FROM THE DATABASE
router.get('/:id', function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) return res.status(500).send("There was a problem finding the book.");
        if (!book) return res.status(404).send("No book found.");
        res.status(200).send(book);
    });
});
// DELETES A BOOK FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err, book) {
        if (err) return res.status(500).send("There was a problem deleting the book.");
        res.status(200).send("Book: " + book.title + " was deleted.");
    });
});

// UPDATES A SINGLE BOOK IN THE DATABASE
router.put('/:id', function (req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, book) {
        if (err) return res.status(500).send("There was a problem updating the book.");
        res.status(200).send(book);
    });
});
module.exports = router;