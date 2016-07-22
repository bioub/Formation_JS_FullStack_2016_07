
console.log('Bonjour');

function hello() {
    console.log('Hello');
}

var id = setInterval(hello, 1000);

function goodbye() {
    console.log('Goodbye');
    clearInterval(id);
}

setTimeout(goodbye, 5000);