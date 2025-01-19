function signCheck(numOne, numTwo, numThree) {
  const multiply = (a, b) => a * b;

  const product = multiply(numOne, multiply(numTwo, numThree));

  if (product >= 0) {
    console.log('Positive');
  } else {
    console.log('Negative');
  }
}

signCheck(-6, -12, 14);
signCheck(5, 12, -15);
