function solve(inputArr) {
  inputArr
    .map((heroData) => {
      const [heroName, heroLevel, Items] = heroData.split(' / ');

      return {
        heroName,
        heroLevel,
        Items,
      };
    })
    .sort((a, b) => a.heroLevel - b.heroLevel)
    .forEach((heroOutput) => {
      console.log(`Hero: ${heroOutput.heroName}`);
      console.log(`level => ${heroOutput.heroLevel}`);
      console.log(`items => ${heroOutput.Items}`);
    });
}

solve([
  'Batman / 2 / Banana, Gun',
  'Superman / 18 / Sword',
  'Poppy / 28 / Sentinel, Antara',
]);
