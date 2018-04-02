var header = require('../header.js');
console.log(header.display("Assignment 6.4", "Gabriel", "Vance", "User Interface Submission")); 


var express=require("express");
var http=require("http");
var path=require("path");
var logger=require("morgan");

var app=express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");

app.use(logger("short"));

app.get("/",function(request,response){
    response.render("index",{
        message:"home page"
    });
});

app.get("/about",function(request,response){
    response.render("about",{
        message:"about page"
    });
});

app.get("/contact",function(request,response){
    response.render("contact",{
        message:"contact page"
    });
});



http.createServer(app).listen(8080,function(){
    console.log("Application started on port 8080");
});