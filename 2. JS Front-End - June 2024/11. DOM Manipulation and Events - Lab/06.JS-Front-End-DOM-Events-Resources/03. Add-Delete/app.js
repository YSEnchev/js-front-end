function addItem() {
  const itemsElement = document.getElementById('items');
  const newItemTextElement = document.getElementById('newItemText');

  const liElement = document.createElement('li');
  liElement.textContent = newItemTextElement.value;

  const deleteButton = document.createElement('a');
  deleteButton.textContent = '[Delete]';
  //   deleteButton.setAttribute('href', '#');
  deleteButton.href = '#';

  deleteButton.addEventListener('click', (e) => {
    // liElement.remove(); NO!
    e.currentTarget.parentElement.remove(); //currentTarget e елемента, който сме задали "Delete бутона". Достъпваме елемента родител "li" и го изтриваме целия;
  });

  liElement.appendChild(deleteButton);

  itemsElement.appendChild(liElement);

  newItemTextElement.value = '';
}
