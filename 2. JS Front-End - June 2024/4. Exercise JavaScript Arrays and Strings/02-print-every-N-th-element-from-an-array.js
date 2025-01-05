function printEveryNth(arr, step) {
  return arr.filter((_, i) => i % step === 0);

  //   const newArr = [];
  //   arr.forEach((element, index) => {
  //     if (index % step === 0) {
  //       newArr.push(element);
  //     }
  //   });
  //   return newArr;
}

printEveryNth(['5', '20', '31', '4', '20'], 2);
