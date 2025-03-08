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

    const searchValue = document.getElementById('searchField').value;
    const matchRows = getMatchElements(searchValue);

    matchRows.forEach((matchRow) => {
      matchRow.classList.add('select');
    });
  }
}
