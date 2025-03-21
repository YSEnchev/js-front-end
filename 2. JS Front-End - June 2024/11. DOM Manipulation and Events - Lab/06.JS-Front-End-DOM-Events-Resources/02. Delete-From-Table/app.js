function deleteByEmail() {
  const customerTablaElement = document.getElementById('customers');
  const inputElement = document.querySelector('input[type=text][name=email]');
  const resultElement = document.getElementById('result');

  const searchEmailInput = inputElement.value;
  const tableRowElements = customerTablaElement.querySelectorAll('tbody tr');

  console.log(customerTablaElement);
  console.log(inputElement);
  console.log(resultElement);
}
