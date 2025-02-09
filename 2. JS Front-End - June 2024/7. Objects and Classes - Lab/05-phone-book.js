function solve(input) {
  let phoneBook = {};

  for (const entry of input) {
    let [name, phone] = entry.split(' ');

    phoneBook[name] = phone;
  }

  for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}

// function fancySolve(input) {
//   let result = input
//     .map((entry) => entry.split(' '))
//     .reduce((phoneBook, [name, phone]) => {
//       phoneBook[name] = phone;

//       return phoneBook;
//     }, {});

//   //   console.log(result);

//   for (const name in result) {
//     console.log(`${name} -> ${result[name]}`);
//   }
// }

solve([
  'Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344',
]);
