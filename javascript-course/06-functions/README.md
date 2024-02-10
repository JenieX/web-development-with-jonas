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

## Glossary

Note: First-class function is just a concept. However, there are higher order functions in practice, which is possible because the language supports First-class functions.

### [First-class Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

### [Higher-order Function](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function)

A function that returns a function, takes other functions as arguments, or both.

Hint: Made possible because of the concept of First-class functions.
