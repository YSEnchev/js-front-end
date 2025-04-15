const baseUrl = `http://localhost:3030/jsonstore/games`;

const loadButton = document.getElementById('load-games');
const addButton = document.getElementById('add-game');
const gameList = document.getElementById('games-list');

const nameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');

loadButton.addEventListener('click', loadGames);
addButton.addEventListener('click', addGame);

async function addGame() {
  const name = nameInput.value;
  const type = typeInput.value;
  const players = playersInput.value;

  clearInputs();

  await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, type, players }),
  });

  await loadGames();
}

async function loadGames() {
  gameList.innerHTML = '';

  const response = await fetch(baseUrl);
  const result = await response.json();
  const games = Object.values(result);

  const gameElements = games.map((game) =>
    createGameElement(game.name, game.type, game.players)
  );
  gameList.append(...gameElements);
}

function createGameElement(name, type, players) {
  const pNameElement = document.createElement('p');
  pNameElement.textContent = name;

  const pTypeElement = document.createElement('p');
  pTypeElement.textContent = type;

  const pMaxPlayerElement = document.createElement('p');
  pMaxPlayerElement.textContent = players;

  const divContentElement = document.createElement('div');
  divContentElement.classList.add('content');
  divContentElement.appendChild(pNameElement);
  divContentElement.appendChild(pTypeElement);
  divContentElement.appendChild(pMaxPlayerElement);

  const changeButton = document.createElement('button');
  changeButton.classList.add('change-btn');
  changeButton.textContent = 'Change';

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-btn');
  deleteButton.textContent = 'Delete';

  const divButtons = document.createElement('div');
  divButtons.classList.add('buttons-container');
  divButtons.appendChild(changeButton);
  divButtons.appendChild(deleteButton);

  const gameDivElement = document.createElement('div');
  gameDivElement.classList.add('board-game');
  gameDivElement.appendChild(divContentElement);
  gameDivElement.appendChild(divButtons);

  return gameDivElement;
}

function clearInputs() {
  nameInput.value = '';
  typeInput.value = '';
  playersInput.value = '';
}
