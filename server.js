var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
require("dotenv").config();
var todo=require('./routes/todo');
var login=require('./routes/login');
var port=process.env.PORT || 5000;

var app=express();
var db=mongoose.connect('mongodb://localhost/Todo');

mongoose.connection.once('connected', function() {
  console.log("Connected to database")
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(function(req,res,next){
	res.header('Access-control-Allow-Origin','*');
	res.header('Access-control-Allow-Methods','GET,PUT,POST,DELETE');
	res.header('Access-control-Allow-Headers','Content-type');
	next();
})
app.use('/',todo);
app.use('/',login);
app.listen(port,function(){
	console.log('server started on port'+port);
});