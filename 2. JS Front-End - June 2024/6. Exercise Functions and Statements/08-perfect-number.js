function perfectNumber(number) {
  const notPerfectNumber = "It's not so perfect.";

  if (number < 0 || !Number.isInteger(number)) {
    console.log(notPerfectNumber);
    return;
  }

  function getDivisors(n) {
    const halfOfNumber = number / 2;
    const divisors = [];

    for (
      let currentNumber = 1;
      currentNumber <= halfOfNumber;
      currentNumber++
    ) {
      if (n % currentNumber !== 0) {
        continue;
      }

      divisors.push(currentNumber);
    }

    return divisors;
  }

  const sumDivisors = (numberArr) => numberArr.reduce((a, b) => a + b, 0);

  const divisors = getDivisors(number);
  const message =
    sumDivisors(divisors) === number
      ? 'We have a perfect number!'
      : "It's not so perfect.";

  console.log(message);
}

perfectNumber(28);
perfectNumber(1236498);
