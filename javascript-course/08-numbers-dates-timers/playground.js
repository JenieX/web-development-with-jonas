// @ts-check
'use strict';

// Value inspection
console.log(9007199254740991);
console.log(2 ** 53 - 1);
console.log(Math.pow(2, 53) - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER);

// ------------------------

console.log(9007199254740991 + 1);
// => 9007199254740992

console.log(9007199254740991 + 2);
// => 9007199254740992

console.log(9007199254740992 === 9007199254740993);
// => true
