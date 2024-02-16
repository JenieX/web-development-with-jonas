// @ts-check
'use strict';

// https://stackoverflow.com/a/29246176

/** @param {() => { results: number; signature: string }} generator */
function logResults(generator) {
  let loops = 1_000_000;

  /** @type {Record<String, number>} */
  const collector = {};
  let callbackSignature;

  while (loops) {
    const { results: randomNumber, signature } = generator();

    if (callbackSignature === undefined) {
      callbackSignature = signature;
    }

    if (collector[randomNumber] === undefined) {
      collector[randomNumber] = 1;
    } else {
      collector[randomNumber] += 1;
    }

    loops -= 1;
  }

  console.log(callbackSignature);
  console.log(collector);
  console.log('------------------------');
}

/**
 * Generate random integer number between 0 (included) and max (excluded)
 *
 * @param {number} max
 */
function getRandomIntegerFromZero(max) {
  // return Math.floor(Math.random() * max);

  return {
    signature: `Math.floor(Math.random() * ${max})`,
    results: Math.floor(Math.random() * max),
  };
}

/**
 * Generate random integer number between min (included) and max (excluded)
 *
 * @param {number} min
 * @param {number} max
 * @param {boolean} maxIncluded
 */
function getRandomInteger(min, max, maxIncluded = false) {
  const zeroOrOne = maxIncluded === true ? 1 : 0;

  return {
    signature: `Math.floor(Math.random() * (${max - min + zeroOrOne})) + ${min}`,
    results: Math.floor(Math.random() * (max - min + zeroOrOne)) + min,
  };
}

// ------------------------

logResults(getRandomIntegerFromZero.bind(undefined, 2));
// => {0: 500000, 1: 500000}

logResults(getRandomIntegerFromZero.bind(undefined, 4));
// => {0: 250000, 1: 250000, 2: 250000, 3: 250000}

logResults(getRandomInteger.bind(undefined, 4, 8));
// => {4: 250000, 5: 250000, 6: 250000, 7: 250000}

logResults(getRandomInteger.bind(undefined, 4, 8, true));
// => {4: 200000, 5: 200000, 6: 200000, 7: 200000, 8: 200000}

//------------------------

// Extra examples

// 0 -> 10
Math.floor(Math.random() * 11);

// 1 -> 10
Math.floor(Math.random() * 10) + 1;

// 5 -> 20
Math.floor(Math.random() * 16) + 5;

// -10 -> (-2)
Math.floor(Math.random() * 9) - 10;
