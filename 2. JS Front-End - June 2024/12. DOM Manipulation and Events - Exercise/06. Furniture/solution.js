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
    currentTrClone.children[4].children[0].disabled = false;

    tBodyElement.appendChild(currentTrClone);
  }

  function onGenerateBtnClickHandler() {
    const inputData = JSON.parse(inputTextarea.value);

    inputData.forEach(appendTrForEachData);
  }

  function onBuyBtnClickHandler() {
    const allCheckedInputElements = [
      ...document.querySelectorAll("input[type='checkbox']"),
    ].filter((inputElement) => inputElement.checked);

    console.log(allCheckedInputElements);
  }

  generateBtn.addEventListener('click', onGenerateBtnClickHandler);
  buyBtn.addEventListener('click', onBuyBtnClickHandler);
}
