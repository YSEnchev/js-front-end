function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    const tableRowElements = document.querySelectorAll(
      'table.container tbody tr'
    );

    function getMatchElements(input) {
      return [...tableRowElements].filter((rowElement) =>
        rowElement.textContent.toLowerCase().includes(input.toLowerCase())
      );
    }

    function clearPreviousState() {
      [...tableRowElements].forEach((rowEl) => {
        rowEl.classList.remove('select');
      });
    }

    clearPreviousState();

    const searchFieldElement = document.getElementById('searchField');
    const matchRows = getMatchElements(searchFieldElement.value);

    matchRows.forEach((matchRow) => {
      matchRow.classList.add('select');
    });

    searchFieldElement.value = '';
  }
}
