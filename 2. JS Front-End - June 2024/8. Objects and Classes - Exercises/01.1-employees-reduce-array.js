function solve(input) {
  input
    .reduce((acc, name) => {
      acc.push({
        name: name,
        personalNumber: name.length,
      });

      return acc;
    }, [])
    .forEach((employee) => {
      console.log(
        `Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`
      );
    });
}

solve([
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
]);
