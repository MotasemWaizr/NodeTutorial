
var express=require('express');

var app=express();


app.get('/',function(req,res){
    res.send("Hello world");
})

var port=5000;
app.listen(port, function(err){
    console.log('running server on port '+ port);

});