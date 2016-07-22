(function() {
    'use strict';

    var bodyElt = document.body;

    setInterval(function() {
        bodyElt.classList.toggle('alternate');
    }, 300);
}());