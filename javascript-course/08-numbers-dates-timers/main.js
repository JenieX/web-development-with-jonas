import { accounts } from './js/accounts.js';
import { elements } from './js/elements.js';

function formatMovementDate(date, locale) {
  const calcDaysPassed = (date1, date2) => {
    const differenceInDays = Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
    const rounded = Math.round(differenceInDays);

    return rounded;
  };

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) {
    return 'Today';
  }

  if (daysPassed === 1) {
    return 'Yesterday';
  }

  if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  }

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  const options = {
    // dateStyle: 'long', // "full", "long", "medium", and "short"
    // timeStyle: 'long', // "full", "long", "medium", and "short"

    // Or customize individually
    // hour12: false,
    // timeZoneName: 'long',
    weekday: 'long', // "long", "short", and "narrow"

    // second: '2-digit', // "numeric", and "2-digit"
    // minute: '2-digit', // "numeric", and "2-digit"
    // hour: '2-digit', // "numeric", and "2-digit"
    day: 'numeric', // "numeric", and "2-digit"
    month: 'numeric', // "numeric", "2-digit", "long", "short", and "narrow"
    year: '2-digit', // "numeric", and "2-digit"
  };

  return new Intl.DateTimeFormat(locale, options).format(date);
}

function formatMovementCurrency(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

function displayMovements(account, sort = false) {
  elements.containerMovements.innerHTML = '';
  let movements;

  if (sort === true) {
    // Create a copy to keep the original order as well
    movements = account.movements.slice().sort((a, b) => a - b);
  } else {
    movements = account.movements;
  }

  movements.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[index]);
    const displayDate = formatMovementDate(date, account.locale);

    const displayCurrency = formatMovementCurrency(
      movement,
      account.locale,
      account.currency,
    );

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${displayCurrency}</div>
      </div>
    `;

    elements.containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplayBalance(account) {
  account.balance = account.movements.reduce((accumulator, movement) => {
    return accumulator + movement;
  }, 0);

  // elements.labelBalance.textContent = `${account.balance.toFixed(2)}€`;
  elements.labelBalance.textContent = formatMovementCurrency(
    account.balance,
    account.locale,
    account.currency,
  );
}

function calcDisplaySummary(account) {
  const incomes = account.movements
    .filter((movement, index, originalArray) => {
      if (index === 0) {
        // console.log(originalArray);
      }

      return movement > 0;
    })
    .reduce((accumulator, deposit, index, arrayAfterFilter) => {
      if (index === 0) {
        // console.log(arrayAfterFilter);
      }

      return accumulator + deposit;
    }, 0);

  // elements.labelSumIn.textContent = `${incomes.toFixed(2)}€`;
  elements.labelSumIn.textContent = formatMovementCurrency(
    incomes,
    account.locale,
    account.currency,
  );

  const outcome = account.movements
    .filter((movement, index, originalArray) => {
      if (index === 0) {
        // console.log(originalArray);
      }

      return movement < 0;
    })
    .reduce((accumulator, withdraw, index, arrayAfterFilter) => {
      if (index === 0) {
        // console.log(arrayAfterFilter);
      }

      return accumulator + withdraw;
    }, 0);

  // elements.labelSumOut.textContent = `${Math.abs(outcome.toFixed(2))}€`;
  elements.labelSumOut.textContent = formatMovementCurrency(
    Math.abs(outcome),
    account.locale,
    account.currency,
  );

  const interest = account.movements
    .filter((movement, index, originalArray) => {
      if (index === 0) {
        // console.log(originalArray);
      }

      return movement > 0;
    })
    .map((deposit, index, arrayAfterFilter) => {
      if (index === 0) {
        // console.log(arrayAfterFilter);
      }

      return (deposit * account.interestRate) / 100;
    })
    // Filter out interests that are below 1
    .filter((interest, index, arrayAfterMap) => {
      if (index === 0) {
        // console.log(arrayAfterMap);
      }

      return interest >= 1;
    })
    .reduce((accumulator, interest, index, arrayAfterSecondFilter) => {
      if (index === 0) {
        // console.log(arrayAfterSecondFilter);
      }

      return accumulator + interest;
    }, 0);

  // elements.labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  elements.labelSumInterest.textContent = formatMovementCurrency(
    interest,
    account.locale,
    account.currency,
  );
}

function createUsernames(originalAccounts) {
  for (const account of originalAccounts) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  }
}

function updateUI(account) {
  displayMovements(account);
  calcDisplayBalance(account);
  calcDisplaySummary(account);
}

function validatePin(pin) {
  const pinAsNumber = Number(pin);

  if (pinAsNumber.toString() !== pin) {
    throw new Error('Invalid value for pin!');
  }

  if (pin.length !== 4) {
    throw new Error('Invalid length for pin!');
  }
}

function login(account) {
  console.log(account);

  const welcomeMessage = `Welcome back, ${account.owner.split(' ')[0]}`;
  elements.labelWelcome.textContent = welcomeMessage;
  elements.containerApp.style.opacity = 100;

  // Clear input fields
  elements.inputLoginUsername.value = elements.inputLoginPin.value = '';
  elements.inputLoginUsername.blur();
  elements.inputLoginPin.blur();

  updateUI(account);
}

// ------------------------

let currentAccount;

elements.btnLogin.addEventListener('click', (event) => {
  // Prevent form from submitting
  event.preventDefault();

  const providedUsername = elements.inputLoginUsername.value;
  const providedPin = elements.inputLoginPin.value;

  try {
    validatePin(providedPin);
  } catch (error) {
    console.error(error);
    return;
  }

  console.log({ providedUsername, providedPin });

  const matchedAccount = accounts.find(({ username, pin }) => {
    return username === providedUsername && pin === Number(providedPin);
  });

  if (matchedAccount === undefined) {
    console.error('No matched account!');
    return;
  }

  currentAccount = matchedAccount;

  login(currentAccount);
});

elements.btnTransfer.addEventListener('click', (event) => {
  event.preventDefault();

  const amount = Number(elements.inputTransferAmount.value);
  const receiver = accounts.find(({ username }) => {
    return username === elements.inputTransferTo.value;
  });

  elements.inputTransferAmount.value = elements.inputTransferTo.value = '';

  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiver !== undefined &&
    receiver.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);

    // Update dates
    const now = new Date().toISOString();
    currentAccount.movementsDates.push(now);
    receiver.movementsDates.push(now);

    updateUI(currentAccount);
  } else {
    console.error('Something went wrong!');
  }
});

elements.btnLoan.addEventListener('click', (event) => {
  event.preventDefault();

  const amount = Number(elements.inputLoanAmount.value);

  if (amount <= 0) {
    console.error('Invalid value!');

    return;
  }

  const didDepositTenthTheAmount = currentAccount.movements.some((mov) => {
    return mov >= amount * 0.1;
  });

  if (didDepositTenthTheAmount === false) {
    console.error("User didn't meet the requirements!");

    return;
  }

  currentAccount.movements.push(amount);

  // Update dates
  currentAccount.movementsDates.push(new Date().toISOString());

  updateUI(currentAccount);
  elements.inputLoanAmount.value = '';
});

elements.btnClose.addEventListener('click', (event) => {
  event.preventDefault();

  if (
    elements.inputCloseUsername.value === currentAccount.username &&
    Number(elements.inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(({ username }) => {
      return username === currentAccount.username;
    });

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    elements.containerApp.style.opacity = 0;
  }

  elements.inputCloseUsername.value = elements.inputClosePin.value = '';

  console.log(accounts);
});

let sorted = false;
elements.btnSort.addEventListener('click', (event) => {
  // I don't think it is needed!
  // event.preventDefault();

  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

createUsernames(accounts);

// const properDate = new Date()
//   .toISOString()
//   .slice(0, 10)
//   .split('-')
//   .reverse()
//   .join('/');

// elements.labelDate.textContent = properDate;

elements.labelDate.textContent = formatMovementDate(
  new Date(1992, 3, 22),
  accounts[0].locale,
);

// temp
// console.log(accounts);
// console.log('------------------------');
currentAccount = accounts[0];
login(accounts[0]);
