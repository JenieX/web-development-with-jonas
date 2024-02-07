const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');
const diceElement = document.querySelector('.dice');

const stateElements = {
  'player-1': {
    section: document.querySelector('.player--0'),
    total: document.querySelector('#score--0'),
    current: document.querySelector('#current--0'),
  },
  'player-2': {
    section: document.querySelector('.player--1'),
    total: document.querySelector('#score--1'),
    current: document.querySelector('#current--1'),
  },
};

const initialState = JSON.stringify({
  turn: 'player-1',
  'player-1': {
    total: 0,
    current: 0,
  },
  'player-2': {
    total: 0,
    current: 0,
  },
});

let state = JSON.parse(initialState);

function switchTurn() {
  // You can use classLis.toggle() instead!

  state.turn = state.turn === 'player-1' ? 'player-2' : 'player-1';
  stateElements['player-1'].section.classList.toggle('player--active');
  stateElements['player-2'].section.classList.toggle('player--active');

  // if (state.turn === 'player-1') {
  //   stateElements['player-1'].section.classList.remove('player--active');

  //   state.turn = 'player-2';
  //   stateElements['player-2'].section.classList.add('player--active');
  // } else {
  //   stateElements['player-2'].section.classList.remove('player--active');

  //   state.turn = 'player-1';
  //   stateElements['player-1'].section.classList.add('player--active');
  // }
}

rollBtn.addEventListener('click', () => {
  const diceValue = Math.trunc(Math.random() * 6) + 1;
  diceElement.setAttribute('src', `dice-${diceValue}.png`);

  if (diceElement.classList.contains('hidden')) {
    diceElement.classList.remove('hidden');
  }

  if (diceValue === 1) {
    state[state.turn].current = 0;
    stateElements[state.turn].current.textContent = 0;
    switchTurn();
  } else {
    state[state.turn].current += diceValue;
    stateElements[state.turn].current.textContent = state[state.turn].current;
    // console.log(JSON.stringify(state));
  }
});

holdBtn.addEventListener('click', () => {
  state[state.turn].total += state[state.turn].current;
  stateElements[state.turn].total.textContent = state[state.turn].total;

  state[state.turn].current = 0;
  stateElements[state.turn].current.textContent = 0;

  switchTurn();
});

newBtn.addEventListener('click', () => {
  console.log('Resetting game..');
  state = JSON.parse(initialState);
  diceElement.classList.add('hidden');
});
