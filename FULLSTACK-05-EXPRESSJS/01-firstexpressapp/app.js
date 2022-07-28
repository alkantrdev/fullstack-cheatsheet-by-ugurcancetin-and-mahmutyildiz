var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Merhaba, bu bir express uygulamasıdır.");
});

app.get("/test", function(req, res) {
    res.send('Bu bir test responsu\'dur.');
});

var server = app.listen(3000, function(){
    console.log("Server is running at port: %d", server.address().port);
    
});