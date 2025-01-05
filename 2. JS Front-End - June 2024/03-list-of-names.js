function listOfNames(arrNames) {
  //   arrNames
  //     .sort((a, b) => a.localeCompare(b))
  //     .map((name, index) => {
  //       const position = index + 1;
  //       console.log(`${position}.${name}`);
  //     });

  const result = arrNames
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((x, i) => `${i + 1}.${x}`)
    .join('\n');

  //   console.log(arrNames);

  console.log(result);
}

const result = listOfNames(['John', 'Bob', 'Christina', 'Ema']);
