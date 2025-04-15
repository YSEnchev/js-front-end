const baseUrl = `http://localhost:3030/jsonstore/games`;

const loadButton = document.getElementById('load-games');
const gameList = document.getElementById('games-list');

loadButton.addEventListener('click', loadGames);

async function loadGames() {
  gameList.innerHTML = '';

  const response = await fetch(baseUrl);
  const result = await response.json();
  const games = Object.values(result);

  const gameElements = games.map((game) =>
    createGameElement(game.gameName, game.type, game.pMaxPlayerElement)
  );
  console.log(gameElements);
}

function createGameElement(gameName, type, maxPlayer) {
  const pNameElement = document.createElement('p');
  pNameElement.textContent = gameName;

  const pTypeElement = document.createElement('p');
  pTypeElement.textContent = type;

  const pMaxPlayerElement = document.createElement('p');
  pMaxPlayerElement.textContent = maxPlayer;

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
