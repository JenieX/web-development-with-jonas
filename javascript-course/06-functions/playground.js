'use strict';

const jenie = {
  name: 'Jenie',
  age: 32,

  logAge() {
    console.log(`${this.name} is ${this.age} years old`);
  },

  logChildren(child, ...children) {
    console.log(`${this.name}'s children are ${children.join(', ')}, and ${child}`);
  },
};

const jonas = { name: 'Jonas', age: 33 };

const jonasLogAge = jenie.logAge.bind(jonas);
const jonasLogChildren = jenie.logChildren.bind(jonas, 'Sara');

// ------------------------

jenie.logAge();
// => 'Jenie is 32 years old'

jenie.logChildren('Adam', 'Hawra', 'Azharr');
// => 'Jenie's children are Hawra, Azharr, and Adam'

jonasLogAge();
// => 'Jonas is 33 years old'

jonasLogChildren('Jack');
// => 'Jonas's children are Jack, and Sara'
