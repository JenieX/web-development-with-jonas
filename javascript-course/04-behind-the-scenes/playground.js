'use strict';

const obj1 = {
  name: 'obj1',
  logThis() {
    console.log(this);
  },
};

const obj2 = { name: 'obj2' };

obj1.logThis();
// => { name: 'obj1', logThis: ƒ logThis() }

obj1.logThis.call(obj2);
// => { name: 'obj2' }

obj1.logThis.call(1);
// strict
// => 1
// non–strict
// => Number {1}

// ------------------------
// Extra for the note above!

// Extracted and will act as `function logThis() { console.log(this); }`!
const logThis = obj1.logThis;

logThis();
// strict
// => undefined
// non–strict
// => Window {}
