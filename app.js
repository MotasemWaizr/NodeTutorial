
var express=require('express');

var app=express();

//This for static file routing
//remember the express starts finding the routing pattern from top to down
//It returns the result from the first match
//example for this : http://localhost:5000/css/styles.css
//http://localhost:5000/js/bootstrap.min.js
app.use(express.static('public'));//this is called middleware

// add second middleware to server html files
//any request, express will try first to find it in public and then here
app.use(express.static('src/views'));

app.get('/',function(req,res){
    res.send("Hello world");
});

app.get('/books',function(req,res){
    res.send("Hello Books");
});

var port=5000;
app.listen(port, function(err){
    console.log('running server on port '+ port);

});