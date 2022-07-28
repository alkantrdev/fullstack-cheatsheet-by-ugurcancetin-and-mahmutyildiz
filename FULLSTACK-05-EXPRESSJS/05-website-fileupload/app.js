var express = require('express'),
    multer = require('multer'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());

var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./uploads")
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "__" + Date.now() + "__" + file.originalname);
    }
});

var upload = multer({ storage: Storage }).array("fileToUpload", 3);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.post("/file/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) { return res.end("Birseyler yanlis gitti"); }

        return res.end("Dosya(lar) yuklendi");
    });
});


app.listen(3000, function () {
    console.log('Server has started at port: 3000');
});