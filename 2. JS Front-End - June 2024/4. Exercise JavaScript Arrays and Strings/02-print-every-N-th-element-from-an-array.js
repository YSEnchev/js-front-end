function printEveryNth(arr, count) {
  const cutOffIndex = count % arr.length;

  const leftSide = arr.slice(0, cutOffIndex);
  const rightSide = arr.slice(cutOffIndex);

  const resultArr = rightSide.concat(leftSide);

  console.log(resultArr.join(' '));
}

printEveryNth(['5', '20', '31', '4', '20'], 2);
