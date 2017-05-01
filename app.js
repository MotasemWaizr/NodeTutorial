
var express = require('express');

var app = express();

var bookRouter = express.Router();

//This for static file routing
//remember the express starts finding the routing pattern from top to down
//It returns the result from the first match
//example for this : http://localhost:5000/css/styles.css
//http://localhost:5000/js/bootstrap.min.js
app.use(express.static('public'));//this is called middleware

// add second middleware to server html files
//any request, express will try first to find it in public and then here
//app.use(express.static('src/views'));
//The previous line is commented becuase we want to start using templates and we want the views to be defined as a variable
app.set('views', './src/views');
app.set('view engine', 'ejs');

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

//When there is a request with /Books then use book routers
app.use('/Books',bookRouter);
app.get('/',function(req,res) {
    res.render('index',{title:'Hello from ejs',
        nav:[
            {
                Link:'/Books',
                Text:'Books'
            }, {
                Link:'/Authors',
                Text:'Authors'
            },
    ]});
});

app.get('/books',function(req,res) {
    res.send('Hello Books1');
});
//Take value from environment variables
var port = process.env.PORT || 5000;

app.listen(port, function(err) {
    console.log('running server on port ' + port);

});