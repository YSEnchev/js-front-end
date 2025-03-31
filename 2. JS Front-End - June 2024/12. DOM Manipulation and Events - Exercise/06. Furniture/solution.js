function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const [inputTextarea, outputTextarea] = document.querySelectorAll('textarea');

  const tBodyElement = document.querySelector('tbody');
  const firstTrElement = tBodyElement.querySelector('tr');

  function appendTrForEachData({ img, name, price, decFactor }) {
    const currentTrClone = firstTrElement.cloneNode(true);

    // changing the image
    currentTrClone.children[0].children[0].setAttribute('src', img);

    // changing the name
    currentTrClone.children[1].children[0].textContent = name;

    // changing the price
    currentTrClone.children[2].children[0].textContent = price;

    // changing the decFactor
    currentTrClone.children[3].children[0].textContent = decFactor;

    //enable the checkbox
    const checkBoxElement = currentTrClone.children[4].children[0];
    checkBoxElement.disabled = false;
    checkBoxElement.setAttribute('name', name);
    checkBoxElement.setAttribute('price', price);
    checkBoxElement.setAttribute('decFactor', decFactor);

    tBodyElement.appendChild(currentTrClone);
  }

  function onGenerateBtnClickHandler() {
    const inputData = JSON.parse(inputTextarea.value);

    inputData.forEach(appendTrForEachData);
  }

  function onBuyBtnClickHandler() {
    const outputData = [...document.querySelectorAll("input[type='checkbox']")]
      .filter((inputElement) => inputElement.checked)
      .reduce(
        (acc, currInputElement) => {
          const name = currInputElement.getAttribute('name');
          const price = currInputElement.getAttribute('price');
          const decFactor = currInputElement.getAttribute('decFactor');

          acc.names.push(name);
          acc.totalPrice += Number(price);
          acc.totalDecFactor += Number(decFactor);
          return acc;
        },
        { names: [], totalPrice: 0, totalDecFactor: 0 }
      );

    console.log(outputData);

    outputTextarea.value = `Bought furniture: ${outputData.names.join(
      ', '
    )}\nTotal price: ${outputData.totalPrice.toFixed(
      2
    )}\nAverage decoration factor: ${
      outputData.totalDecFactor / outputData.names.length
    }`;
  }

  generateBtn.addEventListener('click', onGenerateBtnClickHandler);
  buyBtn.addEventListener('click', onBuyBtnClickHandler);
}
