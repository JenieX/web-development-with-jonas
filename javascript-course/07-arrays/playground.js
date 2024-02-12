'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7];

// const result = numbers.splice(1, 0);
const result = numbers.splice(1, undefined);
console.log(result);

console.log(numbers);