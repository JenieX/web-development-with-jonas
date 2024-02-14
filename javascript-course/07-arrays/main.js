import { accounts } from './js/accounts.js';
import { elements } from './js/elements.js';

function displayMovements(originalMovements, sort = false) {
  elements.containerMovements.innerHTML = '';
  let movements;

  if (sort === true) {
    movements = originalMovements.slice().sort((a, b) => a - b);
  } else {
    movements = originalMovements;
  }

  movements.forEach(function (movement, i) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${movement}€</div>
      </div>
    `;

    elements.containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}

function calcDisplayBalance(account) {
  account.balance = account.movements.reduce((accumulator, movement) => {
    return accumulator + movement;
  }, 0);

  elements.labelBalance.textContent = `${account.balance}€`;
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

  elements.labelSumIn.textContent = `${incomes}€`;

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

  elements.labelSumOut.textContent = `${Math.abs(outcome)}€`;

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

  elements.labelSumInterest.textContent = `${interest}€`;
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
  displayMovements(account.movements);
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
    console.error("User didn't meet the requirement!");

    return;
  }

  currentAccount.movements.push(amount);

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

createUsernames(accounts);

// temp
currentAccount = accounts[0];
login(accounts[0]);
