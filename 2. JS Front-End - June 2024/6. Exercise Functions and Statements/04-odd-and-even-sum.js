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
    }
  };
}

number(1000435);
number(3495892137259234);
