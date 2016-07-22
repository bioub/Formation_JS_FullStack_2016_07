const express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Bonjour');
});

app.get('/toto', function(req, res) {
    res.send('Toto');
});

app.get('/json', function(req, res) {
    res.json({prenom: 'Romain', nom: 'Bohdanowicz'});
});

app.listen(8080, function() {
   console.log('URL du serveur http://localhost:8080');
});