/*
Jeu du plus ou moins
1 - Générer un entier aléatoire entre 0 et 100
(Math sur MDN, soit Google)

2 - Demander à l'utilisateur de saisir un nombre
et récupérer la saisie
(readline sur Node.js)

3 - Afficher si le nombre recherché est plus grand
ou plus petit et reposer la question jusqu'à ce
qu'on le trouve

4 - Gérer les cas ou le joueur ne saisi pas un nombre

5 - Stocker chaque tentative dans un tableau
et les réafficher à chaque question
(Array sur MDN)
*/

const readline = require('readline');
const Jeu = require('./Jeu');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var jeu = new Jeu({
    min: 0,
    max: 100,
    rl: rl
});

jeu.jouer();