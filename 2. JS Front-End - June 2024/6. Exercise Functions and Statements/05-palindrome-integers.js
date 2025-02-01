function palindromeIntegers(inputArrNumbers) {
  // Получаваме число, превръщаме го на стринг, сплитваме, обръщаме, обединяваме и парсваме отново на число
  function isPalindrome(number) {
    const reversedNumber = Number(
      number.toString().split('').reverse().join('')
    );
    return number === reversedNumber; //сравняваме първото число с обърнатото и връщаме true или false
  }

  inputArrNumbers.forEach((number) => {
    // печатаме резултата от функцията за всяко число
    console.log(isPalindrome(number));
  });
}
palindromeIntegers([123, 323, 421, 121]);
