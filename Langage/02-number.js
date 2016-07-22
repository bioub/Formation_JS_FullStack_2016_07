

console.log(typeof 10); // number
console.log(typeof 10.02); // number
console.log(typeof 0xffffff); // number
console.log(typeof 1e12); //

console.log(typeof (10 / 0)); // number
console.log(10 / 0); // Infinity
console.log(isFinite(10 / 0)); // false

console.log(Math.sqrt(-1)); // NaN (Not a Number)
console.log(typeof Math.sqrt(-1)); // number
console.log(Number('ABC')); // NaN
console.log(isNaN(Number('ABC'))); // true

