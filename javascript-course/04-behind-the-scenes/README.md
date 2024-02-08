# Behind the Scenes

## Scoping

### `var` vs `const`

```js
function first() {
  if (2 > 1) {
    var age = 30;
    const email = 'jenie@example.com';
  }

  const second = () => {
    console.log(age);
    // => 30

    console.log(email);
    // => Error: email is not defined
  };

  second();
}

first();
```

### Global

```js
function first() {
  console.log(myName);
  // => 'Jenie'
}

const myName = 'Jenie';
first();
```

### function declaration inside block

```js
'use strict';

function first() {
  {
    function second() {
      console.log('hello!');
    }
  }

  second();
  // strict
  // => ReferenceError: second is not defined
  // non–strict
  // => 'hello!'
}

first();
```

## [Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.

### `var`

```js
console.log(myName);
// => undefined

var myName = 'Jenie';
```
