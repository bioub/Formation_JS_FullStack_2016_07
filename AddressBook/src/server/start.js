var express = require('express');
var cors = require('cors');
var contact = require('./routes/contact');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/formation');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('MongoDB ok');
});


var app = express();
app.use(cors());
app.use('/', express.static(__dirname + '/../client'));
app.use('/api/v1/contacts', contact);

app.all('/*', function(req, res, next) {

    if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
        return next();
    }

    res.sendFile('client/index.html', { root: __dirname + '/../' });
});

// Middleware 404
app.use(function (req, res, next) {
    res.statusCode = 404;
    res.json({message: 'Page inexistante'});
});

// Middleware 500
app.use(function (err, req, res, next) {
    res.statusCode = 500;
    res.json({message: err.message});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});