function generateReport() {
  const thElements = document.querySelectorAll('thead tr th');
  const tbodyRows = document.querySelectorAll('tbody tr');

  const checkedInputElements = [...thElements]
    .map((x, i) => ({ input: x.children[0], index: i }))
    .filter((x) => x.input.checked);

  const outputData = [...tbodyRows].map((tr) => {
    return checkedInputElements.reduce((acc, curr) => {
      acc[curr.input.name] = tr.children[curr.index].textContent;
      return acc;
    }, {});
  });

  document.querySelector('#output').value = JSON.stringify(outputData);
}
