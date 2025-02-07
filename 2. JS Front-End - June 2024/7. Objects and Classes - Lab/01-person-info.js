function personInfo(firstName, lastName, age) {
  let person = { firstName, lastName, age };

  return person;

  //   console.log(person);

  //   for (const key in person) {
  //     console.log(`${key}: ${person[key]}`);
  //   }
}

personInfo('Peter', 'Pan', '20');
