function colorize() {
  // const tableElement = document.querySelector('table tbody');
  // const tableRowElements = tableElement.children;

  // for (let i = 0; i < tableRowElements.length; i += 2) {
  //   tableRowElements[i].style.backgroundColor = 'teal';
  // }

  const evenTableRowElements = document.querySelectorAll(
    'table tbody tr:nth-child(odd)'
  );

  for (const trElement of evenTableRowElements) {
    trElement.style.backgroundColor = 'teal';
  }
}
