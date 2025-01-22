function addAndSubtract(num1, num2, num3) {
  const sumNum1Num2 = (x, y) => x + y;
  const subtractSumWithNum3 = (x, y) => x - y;

  const FirstResult = sumNum1Num2(num1, num2);

  const finalResult = subtractSumWithNum3(FirstResult, num3);

  console.log(finalResult);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
