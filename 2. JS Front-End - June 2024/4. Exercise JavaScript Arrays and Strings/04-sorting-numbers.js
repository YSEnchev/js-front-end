function sortingNumbers(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const outPutArr = new Array(sortedArr.length).fill(0).map((_, index) => {
    const isEven = index % 2 === 0;
    const smallNumberIndex = index / 2;
    const bigNumberIndex = sortedArr.length - Math.ceil(index / 2);

    return isEven ? sortedArr[smallNumberIndex] : sortedArr[bigNumberIndex];
  });

  return outPutArr;
}

const sortingNumbersResult = sortingNumbers([
  1, 65, 3, 52, 48, 63, 31, -3, 18, 56,
]);

console.log(sortingNumbersResult);
