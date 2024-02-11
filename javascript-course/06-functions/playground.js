'use strict';

function log(...args) {
  console.log(this, ...args);
}

const obj1 = { name: 'obj1' };
const obj2 = { name: 'obj2' };

const logBoundFirst = log.bind(obj1, 1, 2);
const logBoundSecond = logBoundFirst.bind(obj2, 3, 4);

logBoundFirst('x');
// => {name: 'obj1'} 1 2 'x'

logBoundSecond(5, 6);
// => {name: 'obj1'} 1 2 3 4 5 6
