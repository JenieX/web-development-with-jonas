# JS Fundamentals (part 1)

## `let`, `const` and `var`

Note: variable declared with `var` will be available on the `window` object.

```js
var a = 1;
const b = 2;
let c = 3;

console.log(a === window.a);
// => true

console.log(b === window.b);
// => false

console.log(c === window.c);
// => false
```

### [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)

The `const` declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator.

### [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

The let declaration declares re-assignable (mutating that variable), block-scoped local variables.

### [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

The `var` statement declares function-scoped or globally-scoped variables.

## Type Conversion vs Type Coercion

Type conversion is when we manually convert from one type to another. Type coercion is when JavaScript automatically converts types behind the scenes for us.

Notes:

- `+` operator converts number to string (concatenate), unlike the `-`, `*`, and the `/` operators.
- JS converts your value into a `boolean` first when used inside a condition.
- Using `==` when comparing two values will use type coercion as well.

```js
// Type coercion examples

console.log('23' + '10' + 3);
// => "23103"

console.log('23' - '10' - 3);
// => 10

console.log('8' * '2');
// => 16

console.log('8' / '2');
// => 4
```
