# JS Fundamentals (part 2)

## [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)

Next example will not log an error without the `use strict` statement.

```js
'use strict';

let hasDriversLicense = false;
const passTest = true;

// Notice the miss spelling of "hasDriversLicense"
if (passTest) {
  hasDriverLicense = true;
  // strict mode only
  // => ReferenceError: hasDriverLicense is not defined
}

if (hasDriversLicense) {
  console.log('I can drive :D');
}

// Some words are preserved, which will log errors only in strick mode.
// SyntaxError: Unexpected strict mode reserved word.
// const interface = 'Audio';
// const private = 534;
```

[Note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_for_modules): Scripts with the attribute `type="module"` are automatically in strict mode.

## [Arguments vs Parameters](https://stackoverflow.com/a/12874546)

The function parameters are the aliases for the values that will be passed to the function. The arguments are the actual values. In another word ([answer](https://stackoverflow.com/a/12874589)), parameters are properties of a function and arguments are properties of a particular call to a function.

## [Statements vs Expressions](https://www.joshwcomeau.com/javascript/statements-vs-expressions/)

Hint: The `console.log` and all functions only accept expressions for arguments!

### Expressions

An expression is a bit of JavaScript code that produces a value.

- Expressions can contain expressions themselves
- A primitive value like `3` is also an expression that produces the value `3`
- Expressions are always part of a statement

### Statements

A JavaScript program is a sequence of statements. Each statement is an instruction for the computer to do something. They also don't produce values.

Hint: Statements typically end with a semi-colon.

```js
// Statement #1
const value = 5;

// Statement #2
if (value > 0) {
  //
}

// Statement #3
throw new Error('Something exploded!');

// Statement #4
return;
```

## [Operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

## [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

For a typical function, the value of `this` is the object that the function is accessed on. In other words, if the function call is in the form `obj.f()`, then `this` refers to `obj`.

In `non–strict` mode, `this` is **always** a reference to an object. If a primitive value is passed as an argument, it will be converted to an object. In `strict` mode, it can be any value.

```js
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
```

### strict vs non-strict

#### strict example

```js
'use strict';

console.log(this);
// => Window {}

function logThis() {
  console.log(this);
  // => undefined
}

logThis();
```

#### non-strict example

```js
console.log(this);
// => Window {}

function logThis() {
  console.log(this);
  // => Window {}
}

logThis();
```
