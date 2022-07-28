var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/", function(req, res) {
    // res.send("Merhaba, bu bir express uygulamasıdır.");
    res.render("home");
});

app.get("/test/:comments/not/:yorum", function(req, res) {
    res.send("bu bir yorum bolumudur");
});

app.get("/test/:bisey", function(req, res){

    var testParametresi = req.params.bisey;
    console.log(testParametresi);
    res.render("test", { testParametresi });
});

app.get("/test", function(req, res) {
    res.send('<h1>Bu bir test response\'dur.</h1>');
});

app.get("*", function(req, res){
    res.send('Sayfa bulunamadı!');
});




var server = app.listen(3000, function(){
    console.log("Server is running at port: %d", server.address().port);
    
});



// app.get("/", function(req, res) {
//     // res.send("Merhaba, bu bir express uygulamasıdır.");
//     res.render("home.ejs");
// });

// app.get("/test/:comments/not/:yorum", function(req, res) {
//     res.send("bu bir yorum bolumudur");
// });

// app.get("/test/:bisey", function(req, res){

//     var testParametresi = req.params.bisey;
//     console.log(testParametresi);
//     res.render("test.ejs", { testParametresi });
// });

// app.get("/test", function(req, res) {
//     res.send('<h1>Bu bir test response\'dur.</h1>');
// });

// app.get("*", function(req, res){
//     res.send('Sayfa bulunamadı!');
// });




// var server = app.listen(3000, function(){
//     console.log("Server is running at port: %d", server.address().port);
    
// });