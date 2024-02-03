# JS Fundamentals (part 1)

## `let`, `const` and `var`

### `let`

Allows you to reassign a value to a variable, also called mutating that variable.

## Type Conversion vs Type Coercion

Type conversion is when we manually convert from one type to another. Type coercion is when JavaScript automatically converts types behind the scenes for us.

Notes:

- `+` operator converts number to string (concatenate), unlike the `-`, `*`, and the `/` operators.
- JS converts your value into a `boolean` first when used inside a condition.
- Using `==` when comparing two values will use type Coercion as well.

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
