function search() {
  const townsElement = document.querySelectorAll('#towns li');
  //   const searchElement = document.getElementsByTagName('button')[0];

  function getMatchElements(input) {
    return [...townsElement].filter((x) =>
      x.textContent.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
  }

  function clearPreviousState() {
    townsElement.forEach((el) => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';
    });
  }

  // clear previous matches
  clearPreviousState();

  //   const [inputElement] = document.getElementsByTagName('input');

  const inputElement = document.getElementById('searchText');

  const matchElements = getMatchElements(inputElement.value);

  matchElements.forEach((matchEl) => {
    matchEl.style.fontWeight = 'bold';
    matchEl.style.textDecoration = 'underline';
  });

  inputElement.value = '';

  document.querySelector(
    'div#result'
  ).textContent = `${matchElements.length} matches found`;
}
