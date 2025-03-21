function addItem() {
  const itemsTextElement = document.getElementById('items');
  const inputElement = document.getElementById('newItemText');

  const textAdd = inputElement.value;

  const newAddingElement = document.createElement('li');

  newAddingElement.textContent = textAdd;

  itemsTextElement.appendChild(newAddingElement);

  inputElement.value = '';
}
