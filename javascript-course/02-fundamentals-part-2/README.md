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

- The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values. In another word ([answer](https://stackoverflow.com/a/12874589)), Parameters are properties of a function and arguments are properties of a particular call to a function.
