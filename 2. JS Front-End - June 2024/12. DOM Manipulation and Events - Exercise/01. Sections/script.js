function create(words) {
  const contentDivElement = document.getElementById('content');

  function createWordStructure(word) {
    const pElement = document.createElement('p');
    const divElement = document.createElement('div');

    pElement.textContent = word;
    pElement.style.display = 'none';

    divElement.appendChild(pElement);

    return divElement;
  }

  words.forEach((word) => {
    const divElements = createWordStructure(word);

    divElements.addEventListener('click', (e) => {
      e.target.querySelector('p').style.display = 'block';
    });

    contentDivElement.appendChild(divElements);
  });
}
