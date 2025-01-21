function smallestOfThreeNumbers(a, b, c) {
  if (a < b && a < c) {
    console.log(a);
  } else if (b < c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

smallestOfThreeNumbers(20, 5, 8);

// Arr optional
// function smallestOfThreeNumbersArr(a) {
//   console.log(a.sort((a, b) => a - b)[0]);
// }

// smallestOfThreeNumbersArr([2, 3, 5]);

// Optional 2
// ((a, b, c) => console.log(Math.min(a, b, c)))(1, 5, 24);
