# JS Fundamentals (part 2)

## Strict mode

Next example will not log an error without the `use strict` statement.

[Note](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#strict_mode_for_modules): Scripts with the attribute `type="module"` are automatically in strict mode.

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
```
