function solve(sentence) {
  const occurrences = sentence.split(' ').reduce((acc, curr) => {
    //сплитваме по ' ' за да получим масив от думи и ги вмъкваме в обект чрез reduce
    const key = curr.toLowerCase(); // превръщаме думата с малки букви
    if (!acc.hasOwnProperty(key)) {
      // ако ключа го няма
      acc[key] = 0; // го създаваме
    }

    acc[key] += 1; // добавяме ключа към обекта

    return acc;
  }, {});

  console.log(
    Object.keys(occurrences) // обхождаме ключовете
      .filter((key) => occurrences[key] % 2 !== 0) // филтрираме обекта с текущия ключ ако е различно от 0
      .join(' ') // вземаме обекта и го присъединяваме с ' '
  );
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
// solve('Cake IS SWEET is Soft CAKE sweet Food');
