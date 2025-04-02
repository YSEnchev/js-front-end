function addItem() {
  const [textInputElement, valueInputElement] =
    document.querySelectorAll('input');

  function createOptionElement(text, value) {
    const option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    return option;
  }

  function clearInputs() {
    textInputElement.value = '';
    valueInputElement.value = '';
  }

  const optionElement = createOptionElement(
    textInputElement.value,
    valueInputElement.value
  );

  document.getElementById('menu').appendChild(optionElement);

  clearInputs();
}
