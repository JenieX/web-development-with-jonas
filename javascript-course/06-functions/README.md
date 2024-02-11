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

The `bind()` method of `Function` instances creates a new function that, when called, calls this function with its `this` keyword set to the provided value, and a given sequence of `arguments` preceding any provided when the new function is called.

### [Partially applied functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#partially_applied_functions)

Arguments (if any) follow the provided `this` value are inserted at the start of the arguments passed to the target function, followed by whatever arguments are passed to the bound function at the time it is called. See example below.

Hint: Used to create specific functions out of the original, even more when binding arguments. This same behavior can be achieved with closure when a function returns a function.

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

---

## []()

..

```js

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
