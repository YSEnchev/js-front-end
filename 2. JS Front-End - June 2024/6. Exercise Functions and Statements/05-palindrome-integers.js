function palindromeIntegers(inputArrNumbers) {
  function isPalindrome(number) {
    const reversedNumber = Number(
      number.toString().split('').reverse().join('')
    );
    return number === reversedNumber;
  }

  inputArrNumbers.forEach((number) => {
    console.log(isPalindrome(number));
  });
}
palindromeIntegers([123, 323, 421, 121]);
