function formatGrade(input) {
  grade = '';

  if (input < 3) {
    grade = 'Fail';
  } else if (input < 3.5) {
    grade = 'Poor';
  } else if (input < 4.5) {
    grade = 'Good';
  } else if (input < 5.5) {
    grade = 'Very good';
  } else {
    grade = 'Excellent';
  }

  console.log(`${grade} (${input < 3 ? 2 : input.toFixed(2)})`);
}

formatGrade(3.99);
