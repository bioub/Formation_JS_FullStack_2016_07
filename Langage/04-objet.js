'use strict';
// Objets prédéfinis

// au niveau du langage
Math.random();
console.log(typeof Math); // object

// au niveau de l'environnement
console.log(typeof console); // object

// Créer des objets à partir de fonctions
// (Fonctions constructeurs)
var now = new Date();
console.log(typeof now); // object
console.log(typeof Date); // function
console.log(now.getYear());

var Console = require('console').Console;
var c = new Console(process.stdout);
c.log('test');

now.maPropriete = 'Toto';
console.log(now.maPropriete);

// Attention innerHtml n'existe pas,
// écrire à l'intérieur va créer la propriété
// balise.innerHTML = 'Contenu';
// balise.innerHtml = 'Contenu';


// Créer son propre object
// Ne pas faire :
var coord = new Object();
coord.x = 12;
coord.y = 10;

// Privilégier la syntaxe litérale (meilleure perf)
var coord = {
    x: 12,
    y: 10
};

// Pattern Options
function creerBouton(couleur, hauteur, valeur) {

}

creerBouton(null, null, 'Cliquez ici');

function creerBouton(options) {
    options = options || {};
    var couleur = options.couleur || 'gris';
    var hauteur = options.hauteur || 30;
    var valeur = options.valeur || 'Valider';
}
creerBouton();
creerBouton({
    valeur: 'Cliquez ici'
});

// Créer ses propres fonctions constructeur

function Contact(prenom, nom) {
    this.prenom = prenom;
    // la closure simule la propriété privée
    this.getNom = function() {
        return nom;
    };
}

Contact.maFonctionStatique = function() {
    console.log('Statique');
};

Contact.prototype.goodbye = function() {
    return 'Au revoir je suis ' + this.prenom;
};

Contact.maFonctionStatique();
var moi = new Contact('Romain', 'Bohdanowicz');
// console.log(moi.hello()); // Bonjour je suis Romain
console.log(moi.getNom()); // Bonjour je suis Romain
console.log(moi.goodbye()); // Bonjour je suis Romain
console.log(moi.hasOwnProperty('hello')); // true
console.log(moi.hasOwnProperty('goodbye')); // false

for (var prop in moi) {
    if (moi.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

var autre = new Contact('Eric');
// console.log(autre.hello()); // Bonjour je suis Eric

class Personne {
    constructor(prenom) {
        this.prenom = prenom;
    }
    hello() {
        return `Bonjour je suis ${this.prenom}`;
    }
}

var toto = new Personne('Toto');
console.log(toto.hello());
console.log(typeof Personne); // function

