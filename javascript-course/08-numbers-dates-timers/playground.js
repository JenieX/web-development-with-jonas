// @ts-check
'use strict';

const number = 12.3456789;

const options = {
  style: 'currency', // "decimal" (default), "currency", "percent", and "unit"
  currency: 'USD',
};

console.log(new Intl.NumberFormat('en-US', options).format(number));
// => $12.35

console.log(new Intl.NumberFormat('de-DE', options).format(number));
// => 12,35 $

console.log(new Intl.NumberFormat('ar-SA', options).format(number));
// => ١٢٫٣٥ US$
