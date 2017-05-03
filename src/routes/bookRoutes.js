var express = require('express');

var bookRouter = express.Router();

var mongodb = require('mongodb').MongoClient;


var router = function (nav) {

    //To get here the route must be /Books/
    bookRouter.route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                //{} means getting everyting
                collection.find({}).toArray(
                    function (err, results) {
                        res.render('books/bookListView', {
                            title: 'Books List',
                            nav: nav,
                            books: results
                        });
                    }
                );

            });

        });

    //To get her the route must be /Books/single
    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('books/bookView', {
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};

module.exports = router;