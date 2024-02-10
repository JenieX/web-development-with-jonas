'use strict';

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
