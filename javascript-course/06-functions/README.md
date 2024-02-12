# Functions

## [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

Default function parameters allow named parameters to be initialized with default values if no value or `undefined` is passed.

Hint: You can make a use of the previous parameters values for each parameter.

```js
const users = {
  jenie: { age: 32 },
  jonas: { age: 33 },
};

function logAge(user = 'Jenie', age = users[user.toLowerCase()].age) {
  console.log(`${user} is ${age} years old`);
}

logAge();
logAge('Jonas');
logAge('Adam', 2);
```

## [`Function.prototype.call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

The `call()` method of `Function` instances calls this function with a given `this` value and `arguments` provided individually.

```js
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

// ------------------------

jenie.logAge();
// => 'Jenie is 32 years old'

jenie.logChildren('Adam', 'Hawra', 'Azharr');
// => 'Jenie's children are Hawra, Azharr, and Adam'

jenie.logAge.call(jonas);
// => 'Jonas is 33 years old'

jenie.logChildren.call(jonas, 'Sara', 'Jack');
// => 'Jonas's children are Jack, and Sara'
```

## [`Function.prototype.apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

The `apply()` method of `Function` instances calls this function with a given `this` value, and `arguments` provided as an array (or an array-like object).

Hint: Not used anymore since the spread operator can be used with the `call()` method.

```js
const jenie = {
  name: 'Jenie',

  logChildren(child, ...children) {
    console.log(`${this.name}'s children are ${children.join(', ')}, and ${child}`);
  },
};

const jonas = { name: 'Jonas' };

// ------------------------

jenie.logChildren('Adam', 'Hawra', 'Azharr');
// => 'Jenie's children are Hawra, Azharr, and Adam'

// jenie.logChildren.call(jonas, 'Sara', 'Jack');
jenie.logChildren.apply(jonas, ['Sara', 'Jack']);
// => 'Jonas's children are Jack, and Sara'
```

## [`Function.prototype.bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

The `bind()` method of `Function` instances creates a **new** function that, when called, calls this function with its `this` keyword set to the provided value, and a given sequence of `arguments` preceding any provided when the new function is called.

### [Partially applied functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#partially_applied_functions)

Arguments (if any) follow the provided `this` value are inserted at the start of the arguments passed to the target function, followed by whatever arguments are passed to the bound function at the time it is called. See example below.

Hint: Used to create **new** specific functions out of the original, even more when binding arguments. This same behavior can be achieved with closure when a function returns a function.

```js
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
```

### Further Binding

A bound function can be further bound. The **newly bound `thisArg` value is ignored**. The arguments that `fn` ultimately receives are, in order: the arguments bound by `boundFn`, arguments bound by `boundFn2`, and the arguments received by `boundFn2`. See example below.

```js
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

// Inspect `this` and `args`
console.dir(logBoundFirst);
console.dir(logBoundSecond);
```

## [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

A closure in JavaScript is created when a function is defined within another function, allowing the inner function to access the outer function's variables and parameters even after the outer function has finished executing.

```js
function createCounter() {
  let counter = 0;

  return {
    increment() {
      counter += 5;
      console.log(counter);
    },
    decrement() {
      counter -= 1;
      console.log(counter);
    },
  };
}

const counter = createCounter();

counter.increment();
// => 5

counter.increment();
// => 10

counter.decrement();
// => 9

counter.decrement();
// => 8

// Inspect closure
console.dir(counter);
```

Another example showing that closure has priority over the scope chain.

```js
const a = 1000;

function makeClosures() {
  return (() => {
    const a = 1;

    return (() => {
      const b = 2;

      return (() => {
        const c = 3;

        return (() => {
          const d = 4;

          return () => {
            const e = 5;
            console.log(a, b, c, d, e);
          };
        })();
        //
      })();
      //
    })();
    //
  })();
}

const myFunc = makeClosures();

myFunc();
// => 1 2 3 4 5

// Inspect closure
console.dir(myFunc);
// [[Scopes]]: Scopes[6]
// 0: Closure {d: 4}
// 1: Closure {c: 3}
// 2: Closure {b: 2}
// 3: Closure {a: 1}
// 4: Script {a: 1000, myFunc: ƒ}
// 5: Global {window}
```

One more example

```js
const myFunc = (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  const callback = () => {
    header.style.color = 'blue';
  };

  document.querySelector('body').addEventListener('click', callback);

  return callback;
})();

console.dir(myFunc);
// [[Scopes]]: Scopes[3]
// 0: Closure {header: h1}
// 1: Script {myFunc: ƒ}
// 2: Global {window}
```

## Glossary

Note: First-class function is just a concept. However, there are higher order functions in practice, which is possible because the language supports First-class functions.

### [First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

### [Higher-order Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

A function that returns a function, takes other functions as arguments, or both.

Hint: Made possible because of the concept of First-class functions.

### [Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

Hint: A big advantage of Callback functions is to create Abstraction.

### [Abstraction](https://developer.mozilla.org/en-US/docs/Glossary/Abstraction)

Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs.

#### [Some Advantages of Data Abstraction](https://developer.mozilla.org/en-US/docs/Glossary/Abstraction#advantages_of_data_abstraction)

- Helps the user to avoid writing low-level code.
- Avoids code duplication and increases reusability.

```js
// Can be thought of as a Low-level function
function capitalizeFirstWord(text) {
  const [firstWord, ...others] = text.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
}

// Can be thought of as a Higher-level function
// and is a Higher-order Function
function transform(text, callback) {
  return callback(text);
}

const text = 'Hello world!';
const transformText = transform(text, capitalizeFirstWord);

console.log(transformText);
// => 'HELLO world!'
```
