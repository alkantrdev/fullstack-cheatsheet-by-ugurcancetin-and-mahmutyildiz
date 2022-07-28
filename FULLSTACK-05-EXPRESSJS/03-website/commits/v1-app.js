var express = require("express");
var app = express();

app.get("/", function(req, res) {
    // res.send("Merhaba, bu bir express uygulamasıdır.");
    res.render("home.ejs");
});

app.get("/test/:yorum", function(req, res) {
    res.send("bu bir yorum bolumudur");
});

app.get("/test", function(req, res) {
    res.send('<h1>Bu bir test responsu\'dur.</h1>');
});

app.get("*", function(req, res){
    res.send('Sayfa bulunamadı!');
});

var server = app.listen(3000, function(){
    console.log("Server is running at port: %d", server.address().port);
    
});