var express = require("express");
var app = express();


var indexRoutes      = require("./routes/index")


app.set("view engine","ejs");

app.use(indexRoutes);

app.listen(3000,process.env.IP,function(){
    console.log("hackathon started")
});