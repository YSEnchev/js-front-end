function oddAndEvenSum(number) {
  const getEvenAndOddDigits = (x) => {
    const evenDigit = [];
    const oddDigit = [];

    let currentNumber = x;

    while (currentNumber > 0) {
      const lastDigit = currentNumber % 10;

      if (lastDigit % 2 === 0) {
        evenDigit.push(lastDigit);
      } else {
        oddDigit.push(lastDigit);
      }

      currentNumber = parseInt(currentNumber / 10);
    }

    return [evenDigit, oddDigit];
  };

  const getSumOfDigits = (array) => array.reduce((a, b) => a + b, 0);
  const printOutputResult = (evenSum, oddSum) =>
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

  const [evenDigits, oddDigits] = getEvenAndOddDigits(number);

  const evenSum = getSumOfDigits(evenDigits);
  const oddSum = getSumOfDigits(oddDigits);

  // console.log(evenSum, oddSum);

  printOutputResult(evenSum, oddSum);
}

// oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
