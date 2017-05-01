var express = require('express');

var bookRouter = express.Router();
var books = [
{
    title : 'The Lightning Thief',
    author : 'Rick Riordan',
    genre: 'Historical Fiction',
    read: false
},
{
    title : 'The Sea of Monsters',
    author : 'Rick Riordan',
    genre: 'Historical Fiction',
    read: false
},
{
    title : 'Sophie\'s World : The Greek Philosophers',
    author : 'Jostein Gaarder',
    genre: 'Historical Fiction',
    read: false
},
{
    title : 'Lucene in Action, Second Edition',
    author : 'Michael McCandless',
    genre: 'Historical Fiction',
    read: false
}
];

//To get here the route must be /Books/
bookRouter.route('/')
    .get(function(req,res) {
    res.render('books',{title:'Hello from ejs',
        nav:[
            {
                Link:'/Books',
                Text:'Books'
            }, {
                Link:'/Authors',
                Text:'Authors'
            },
            ],
        books:books
    });
});

//To get her the route must be /Books/single
bookRouter.route('/single')
    .get(function(req,res) {
    res.send('Hello Single  Book');
});
module.exports = bookRouter;