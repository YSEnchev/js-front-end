function simpleCalculator(num1, num2, operator) {
  let result = null;

  switch (operator) {
    case 'multiply':
      result = (a, b) => num1 * num2;
      break;

    case 'divide':
      result = (a, b) => num1 / num2;
      break;

    case 'add':
      result = (a, b) => num1 + num2;
      break;

    case 'subtract':
      result = (a, b) => num1 - num2;
      break;
  }

  const finalResult = result(num1, num2);
  console.log(finalResult);
}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');

// 'multiply', 'divide', 'add' or 'subtract'
