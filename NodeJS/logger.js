var fs = require('fs');

fs.appendFile('app.log', 'Mon message de log\n', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');

});

fs.appendFileSync('app.log', 'Mon message de log synchrone\n');

/*
var nbs = [];
for (var i=0; i<1000000; i++) {
    nbs[i] = Math.random();
}

console.time('forEach');
nbs.forEach(function(nb) {
  //  console.log(nb);
});
console.timeEnd('forEach');

console.time('for');
for (var i=0; i<nbs.length; i++) {
  //  console.log(nbs[i]);
}
console.timeEnd('for');
*/