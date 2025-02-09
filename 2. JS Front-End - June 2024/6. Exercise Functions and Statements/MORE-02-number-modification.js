function solve(input) {
  let numberToString = input.toString();

  function getAverage(str) {
    let sum = 0;
    for (const char of str) {
      sum += Number(char);
    }

    return sum / str.length;
  }

  while (getAverage(numberToString) <= 5) {
    numberToString += '9';
  }
  console.log(numberToString);
}

solve(102);
