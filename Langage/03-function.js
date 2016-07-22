(function () {
    'use strict';
    // 3 façons de déclarer une fonction

    // 1 - Function Declaration
    function hello() {
        console.log('Hello');
    }

    setTimeout(hello, 100);

    // 2 - Anonymous Function Expression
    setTimeout(function() {
        console.log('Hello');
    }, 100);

    // 3 - Named Function Expression
    setTimeout(function hello() {
        console.log('Hello');
    }, 100);

    // Portée de fonction
    function globale() {
        var localeVar = 'truc';

        function localeFct () {

        }

        for (var i=0; i<3; i++) {

        }

        for (let j=0; j<3; j++) {

        }

        console.log(i); // 3
        console.log(typeof j); // undefined
        console.log(typeof localeFct); // function
    }

    globale();
    console.log(typeof localeVar); // undefined
    console.log(typeof localeFct); // undefined

    // Arguments
    var addition = function(a, b) {
        return Number(a) + Number(b);
    };

    console.log(addition(1, 2)); // 3
    console.log(addition('1', '2')); // 3
    console.log(addition(1, 2, 3)); // 3
    console.log(addition(1)); // NaN

    var addition = function(a, b) {
        if (typeof a !== 'number') {
            throw new Error('a must be a number');
        }

        if (typeof b !== 'number') {
            throw new Error('b must be a number');
        }

        return a + b;
    };

    try {
        addition('1', '2');
    }
    catch(e) {
        console.error(e.message);
    }

    // Nombre variable d'arguments
    var addition = function() {
        if (arguments.length < 2) {
            throw new Error('Il faut au moins 2 args');
        }

        var somme = Number(arguments[0]) + Number(arguments[1]);

        for (let i=2; i<arguments.length; i++) {
            somme += Number(arguments[i]);
        }

        return somme;
    };

    console.log(addition(1, 2, 3, 4, 5)); // 15

    // En ES6
    // var addition = function(...nbs) {
    //     var somme = 0;
    //
    //     for (let i=0; i<nbs.length; i++) {
    //         somme += Number(nbs[i]);
    //     }
    //
    //     return somme;
    // };
    //
    // console.log(addition(1, 2, 3, 4, 5)); // 15

    // valeur par défaut
    var addition = function(a, b) {
        // Option 1 : tester le type
        if (typeof b === 'undefined') {
            b = 0;
        }

        // Option 2 : conversion
        if (!b) {
            b = 0;
        }

        // Option 3 : ou logique
        b = b || 0;

        return Number(a) + Number(b);
    };

    console.log(addition(1)); // 1

    // Sans Closure
    for (var i=0; i<3; i++) {
        setTimeout(function() {
            console.log(i);
        }, 100)
    }
    // 3 3 3

    // Avec Closure
    function externe(iSaved) {
        // Portée sauvegardée (portée de closure)

        return function() {
            console.log(iSaved);
        };
    }

    for (var i=0; i<3; i++) {
        setTimeout(externe(i), 100)
    }


}());

// Module
// Ici : Immediatly Invoked Function Expression (IIFE)
(function() {
    'use strict';

}());

!function() {
    'use strict';

}();