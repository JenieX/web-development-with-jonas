'use strict';

const jenie = { name: 'Jenie', age: 32, wife: { age: 35 }, children: ['Adam'] };
const jonas = { name: 'Jonas', age: 33 };

console.log(jenie.wife.age);
// => 35
console.log(jenie.children[0]);
// => 'Adam'

console.log(jonas.children?.[0]);
// => undefined
console.log(jonas.wife?.age);
// => undefined
