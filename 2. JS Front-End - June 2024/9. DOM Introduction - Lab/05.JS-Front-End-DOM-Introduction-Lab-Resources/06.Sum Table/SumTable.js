function sumTable() {
  //   const resultElement = document.getElementById('sum');

  //   const trElements = document.querySelectorAll('table tbody tr');
  //   let sum = 0;

  //   for (const trElement of trElements) {
  //     const secondElement = trElement.children[1];

  //     if (secondElement.tagName === 'TD' && secondElement.id !== 'sum') {
  //       const price = Number(secondElement.textContent);
  //       sum += price;
  //     }
  //   }

  //   resultElement.textContent = sum;

  const resultElement = document.getElementById('sum');
  const tdElements = document.querySelectorAll(
    'table tr td:nth-child(2):not(#sum)'
  );

  resultElement.textContent = Array.from(tdElements).reduce(
    (sum, td) => sum + Number(td.textContent),
    0
  );
}
