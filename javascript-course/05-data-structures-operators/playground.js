'use strict';

const jenie = { name: 'Jenie', age: 32, children: 0 };

// Will not change anything!
jenie.children ??= 1;
// => {name: 'Jenie', age: 32, children: 0}

// ------------------------

// jenie.children = null;
jenie.children = undefined;

// Now that the value is either `null` or `undefined`, it will change
jenie.children ??= 1;

console.log(jenie);
// => {name: 'Jenie', age: 32, children: 1}
