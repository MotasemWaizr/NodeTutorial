
var express=require('express');

var app=express();


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