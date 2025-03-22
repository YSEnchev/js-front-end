function deleteByEmail() {
  const customerTablaElement = document.getElementById('customers');
  const inputElement = document.querySelector('input[type=text][name=email]');
  const resultElement = document.getElementById('result');

  const searchEmailInput = inputElement.value;

  const tdElements = customerTablaElement.querySelectorAll(
    'tbody td:last-child'
  );

  const searchElement = Array.from(tdElements).find(
    (el) => el.textContent === searchEmailInput
  );

  if (searchElement) {
    searchElement.parentNode.remove();
    resultElement.textContent = 'Deleted.';
  } else {
    resultElement.textContent = 'Not found.';
  }
}
