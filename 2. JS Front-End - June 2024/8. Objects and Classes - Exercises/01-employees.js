function solve(input) {
  const employees = [];

  input.forEach((name) => {
    employees.push({
      name: name,
      personalNumber: name.length,
    });
    // const employee = {
    //   name,
    //   personalNumber: name.length,
    // };
    // employees.push(employee);
  });

  //   console.log(employees);
  //   console.log(employees.join('\n'));

  employees.forEach((employee) => {
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
