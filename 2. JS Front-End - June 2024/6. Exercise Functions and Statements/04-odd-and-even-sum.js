function oddAndEvenSum(number) {
  const getEvenAndOddDigits = (x) => {
    // функция за определяне и разделяне на четни и нечетни
    const evenDigit = [];
    const oddDigit = [];

    let currentNumber = x;

    while (currentNumber > 0) {
      const lastDigit = currentNumber % 10; // взимаме последната цифра от числото;

      if (lastDigit % 2 === 0) {
        // определяме дали е четно или не;
        evenDigit.push(lastDigit);
      } else {
        oddDigit.push(lastDigit);
      }

      currentNumber = parseInt(currentNumber / 10); // премахваме последната цифра от числото
    }

    return [evenDigit, oddDigit]; // връщаме два масива - четни и нечетни числа
  };

  const getSumOfDigits = (array) => array.reduce((a, b) => a + b, 0); // функция за сумиране цифрите от получените масиви

  const printOutputResult = (
    evenSum,
    oddSum // функция за принтиране на крайния резултат
  ) => console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

  const [evenDigits, oddDigits] = getEvenAndOddDigits(number); // държим резулатат от двата масива чрез подаденото число от конзолата

  const evenSum = getSumOfDigits(evenDigits); // сумираме четните числа
  const oddSum = getSumOfDigits(oddDigits); // сумираме нечетните числа

  printOutputResult(evenSum, oddSum); // принтираме
}

oddAndEvenSum(1000435);
// oddAndEvenSum(3495892137259234);
