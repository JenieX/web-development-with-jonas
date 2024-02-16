// @ts-check
'use strict';

console.log(Number.isInteger(0));
// => true

console.log(Number.isInteger(1));
// => true

console.log(Number.isInteger(-10));
// => true

console.log(Number.isInteger(5.0));
// => true

console.log(Number.isInteger(0.1));
// => false

console.log(Number.isInteger(NaN));
// => false

console.log(Number.isInteger(Infinity));
// => false

console.log(Number.isInteger(-Infinity));
// => false

console.log(Number.isInteger('10'));
// => false

// ------------------------

// An exception for the case of losing precision

console.log(Number.isInteger(5.0000000000000001));
// => true

console.log(Number.isInteger(4500000000000000.1));
// => true
