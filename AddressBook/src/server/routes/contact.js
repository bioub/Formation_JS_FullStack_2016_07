var express = require('express');
var bodyParser = require('body-parser');
var Contact = require('../model/Contact');

var router = express.Router();

var contacts = [{
    prenom: 'Steve',
    nom: 'Jobs',
    id: 1
},{
    prenom: 'Bill',
    nom: 'Gates',
    id: 2
}];

function logMiddleware(req, res, next) {
    console.log(req.method, ' ', req.url);
    next();
}

// Contact List
router.get('/', function(req, res, next) {

    Contact.find(function (err, contacts) {
        if (err) return next(err);
        res.json(contacts);
    });


});

// Contact Create
router.post('/', bodyParser.json(), logMiddleware, function(req, res) {

    var contact = new Contact(req.body);

    contact.save(function(err, contact) {
        res.statusCode = 201; // CREATED
        res.json(contact);
    });
    
});

// Contact Show
router.get('/:id', function(req, res) {

});

// Contact modify
router.put('/:id', function(req, res) {

});

// Contact delete
// Supprimer le contact
// Ex : supprimer le 3e élément d'un tableau (indice 2)
// tableau.splice(2, 1)
// Répondre en JSON le contact supprimé
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;

    Contact.findByIdAndRemove(id, function(err, contact) {
        if (err) {
            return next(err);
        }

        if (!contact) {
            return next();
        }

        res.json(contact);
    });

    // Au choix
    // On répond le contact supprimé en JSON, status code 200
    // On répond rien, status code 204

    // Réfléchir : Traiter le cas où l'id n'existe pas ?
});

module.exports = router;