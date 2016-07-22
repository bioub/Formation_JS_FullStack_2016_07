(function() {
    'use strict';

    var horlogeElt = document.querySelector('#horloge');

    function update() {
        horlogeElt.innerHTML = new Date();
    }

    setInterval(update, 1000);
    update();
}());