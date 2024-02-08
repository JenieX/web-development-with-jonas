'use strict';

const user = {
  name: 'Jenie',
  birthYear: 1992,

  logAgeInfo() {
    const age = new Date().getFullYear() - this.birthYear;

    // Workaround #1
    /* const that = this;

    // Is a function that is not a property of the object, which act
    // as a regular declared function inside the global scope, which will
    // point its `this` to undefined in strict mode. Not in non-strict mode though.
    const isAdult = function () {
      // console.log(this);

      if (age > 15) {
        console.log(`${that.name} is an adult.`);
      } else {
        console.log(`${that.name} is not an adult!`);
      }
    }; */

    // Workaround #2
    const isAdult = () => {
      if (age > 15) {
        console.log(`${this.name} is an adult.`);
      } else {
        console.log(`${this.name} is not an adult!`);
      }
    };

    console.log(`${age} years old,`);

    isAdult();
  },
};

user.logAgeInfo();
