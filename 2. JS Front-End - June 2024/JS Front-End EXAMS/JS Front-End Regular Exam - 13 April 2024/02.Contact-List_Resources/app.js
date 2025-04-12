window.addEventListener('load', solve);

function solve() {
  const nameElement = document.getElementById('name');
  const phoneNumberElement = document.getElementById('phone');
  const categoryElements = document.getElementById('category');

  const addButtonElement = document.getElementById('add-btn');
  const checkList = document.getElementById('check-list');
  const contactList = document.getElementById('contact-list');

  addButtonElement.addEventListener('click', () => {
    const name = nameElement.value;
    const phone = phoneNumberElement.value;
    const category = categoryElements.value;

    const liElement = createCheckListElement(name, phone, category);

    checkList.appendChild(liElement);

    clearInputs();
  });

  function clearInputs() {
    nameElement.value = '';
    phoneNumberElement.value = '';
    categoryElements.value = '';
  }

  function createCheckListElement(name, phoneNumber, category) {
    const pNameElement = document.createElement('p');
    pNameElement.textContent = `name:${name}`;

    const pPhoneElement = document.createElement('p');
    pPhoneElement.textContent = `phone:${phoneNumber}`;

    const pCategoryElement = document.createElement('p');
    pCategoryElement.textContent = `category:${category}`;

    const articleElement = document.createElement('article');
    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pPhoneElement);
    articleElement.appendChild(pCategoryElement);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');

    const divButtonsElement = document.createElement('div');
    divButtonsElement.classList.add('buttons');
    divButtonsElement.appendChild(editButton);
    divButtonsElement.appendChild(saveButton);

    const liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(divButtonsElement);

    editButton.addEventListener('click', () => {
      nameElement.value = name;
      phoneNumberElement.value = phoneNumber;
      categoryElements.value = category;

      liElement.remove();
    });

    saveButton.addEventListener('click', () => {
      divButtonsElement.remove();

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('del-btn');

      deleteButton.addEventListener('click', () => {
        liElement.remove();
      });

      liElement.appendChild(deleteButton);

      contactList.appendChild(liElement);
    });

    return liElement;
  }
}
