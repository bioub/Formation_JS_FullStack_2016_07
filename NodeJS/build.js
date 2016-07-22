/*
Ecrire le script de build
1 - Qui copie src/index.html dans dist/index.html
2 - Tout le contenu de src/js dans dist/js
*/
const fs = require('fs');

var indexSrc = __dirname + '/src/index.html';
var indexDest = __dirname + '/dist/index.html';

var contenu = fs.readFileSync(indexSrc);
fs.writeFileSync(indexDest, contenu);

var jsSrc = __dirname + '/src/js';
var jsDest = __dirname + '/dist/js';

try {
    var stats = fs.statSync(jsDest);
}
catch(e) {
    fs.mkdirSync(jsDest);
}
var fichiers = fs.readdirSync(jsSrc);
for (var i=0; i<fichiers.length; i++) {
    var fichier = fichiers[i];
    var src = jsSrc + '/' + fichier;
    var dest = jsDest + '/' + fichier;
    var contenu = fs.readFileSync(src);
    fs.writeFileSync(dest, contenu);
}