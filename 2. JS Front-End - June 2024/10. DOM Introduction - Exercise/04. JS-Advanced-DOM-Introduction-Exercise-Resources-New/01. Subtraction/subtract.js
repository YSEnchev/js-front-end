function subtract() {
  const [firstInput, secondInput] =
    document.querySelectorAll('input[type="text"]');

  console.log(firstInput.value);
  console.log(secondInput.value);

  document.getElementById('result').textContent =
    Number(firstInput.value) - Number(secondInput.value);
}
