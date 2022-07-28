var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var sehirler = ["Istanbul", "Izmır", "Ankara", "Bursa"];

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/sehirler", function (req, res) {
    res.render("sehirler", { sehirler: sehirler });
})

app.post("/sehirekle", function(req, res){
    var sehir = req.body.yenisehir;
    sehirler.push(sehir);
    res.redirect("/sehirler");
});


var server = app.listen(3000, function () {
    console.log("Server has started at port: %d", server.address().port);
});