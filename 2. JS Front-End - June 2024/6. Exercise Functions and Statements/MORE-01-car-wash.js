function carWash(input) {
  let cleanLiness = 0;

  for (let command of input) {
    switch (command) {
      case 'soap':
        cleanLiness += 10;
        break;
      case 'vacuum cleaner':
        cleanLiness *= 1.25;
        break;
      case 'mud':
        cleanLiness *= 0.9;
        break;
      case 'water':
        cleanLiness *= 1.2;
        break;
    }
  }
  console.log(`The car is ${cleanLiness.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
