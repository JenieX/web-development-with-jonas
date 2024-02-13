import { accounts } from './js/accounts.js';
import { elements } from './js/elements.js';

// console.log(accounts);
// console.log(elements);

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

displayMovements(accounts[0].movements);
