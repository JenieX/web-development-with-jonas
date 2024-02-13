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
        console.log(arrayAfterFilter);
      }

      return (deposit * account.interestRate) / 100;
    })
    // Filter out interests that are below 1
    .filter((interest, index, arrayAfterMap) => {
      if (index === 0) {
        console.log(arrayAfterMap);
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

// ------------------------

displayMovements(accounts[0].movements);
calcDisplayBalance(accounts[0]);
calcDisplaySummary(accounts[0]);
createUsernames(accounts);

// console.log(accounts)
