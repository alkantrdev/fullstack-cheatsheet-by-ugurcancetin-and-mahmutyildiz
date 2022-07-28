var express         = require('express'),
    app             = express(),
    port            = process.env.PORT || 3000,
    bodyParser      = require('body-parser'); 

var yerlerRoutes = require('./routes/yerler');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
    res.json({message:'Hi from object'});
});

app.use('/api/yerler', yerlerRoutes);

app.listen(port, ()=>{
    console.log('App is running on port : ' + port);
});



