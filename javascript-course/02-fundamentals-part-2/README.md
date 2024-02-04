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
}

if (hasDriversLicense) {
  console.log('I can drive :D');
}

// Some words are preserved, which will log errors only in strick mode:
const interface = 'Audio';
const private = 534;
```

[Note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_for_modules): Scripts with the attribute `type="module"` are automatically in strict mode.

## [function arguments vs function parameters](https://stackoverflow.com/a/12874546)

The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values. In another word ([answer](https://stackoverflow.com/a/12874589)), parameters are properties of a function and arguments are properties of a particular call to a function.

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
