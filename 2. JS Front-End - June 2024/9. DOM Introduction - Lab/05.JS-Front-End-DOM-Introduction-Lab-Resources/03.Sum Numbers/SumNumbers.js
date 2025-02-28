function calc() {
  const idElementOne = document.getElementById('num1');
  const idElementTwo = document.getElementById('num2');
  const idElementSum = document.getElementById('sum');

  const num1 = Number(idElementOne.value);
  const num2 = Number(idElementTwo.value);

  idElementSum.value = num1 + num2;

  console.log(idElementSum);
}
