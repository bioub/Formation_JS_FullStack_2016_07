'use strict';

class Jeu {
    constructor(options) {
        options = options || {};

        if (options.rl === undefined) {
            throw new Error('rl est obligatoire');
        }

        this.$$rl = options.rl;

        this.min = options.min || 0;
        this.max = options.max || 100;
        this.entierAlea = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        this.essais = [];
    }

    jouer() {
        var that = this;

        console.log('Vous avez déjà joué : ' + this.essais.join(', '));

        this.$$rl.question(`Saisir un entier entre ${this.min} et ${this.max} : `, function (saisie) {

            var entierSaisi = parseInt(saisie);

            if (isNaN(entierSaisi)) {
                console.log('Il faut saisir des nombres');
                return that.jouer();
            }

            that.essais.push(entierSaisi);

            if (entierSaisi > that.entierAlea) {
                console.log('Trop grand');
                return that.jouer();
            }

            if (entierSaisi < that.entierAlea) {
                console.log('Trop petit');
                return that.jouer();
            }

            console.log('Gagné');
            that.$$rl.close();
        });
    }
}

module.exports = Jeu;