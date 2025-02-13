function solve(availableStocks, deliveredStocks) {
  function generateObjectData(inputArr) {
    // създаваме функция, която генерира данните от подадения вход;
    return new Array(inputArr.length / 2) // определяме дължината на обекта, който трябва да създадем;
      .fill({}) // създаваме празен обект;
      .reduce((acc, curr, i) => {
        const product = inputArr[i + i]; //определяме името на продукта за всяка итерация по индекса, който заема;
        const quantity = Number(inputArr[i + i + 1]); //определяме количеството на продукта за всяка итерация по индекса, който заема;

        if (!curr[product]) {
          //проверяваме дали продукта вече съществува в обектите;
          curr[product] = 0; // ако не съществува, създаваме нов с нулева стойност;
        }

        curr[product] += quantity; // наливаме количество на продукта;

        return Object.assign(acc, curr); // обединява стойностите между два обекта в един обект (acc + curr);
      }, {});
  }

  const inStock = generateObjectData(availableStocks);
  const ordered = generateObjectData(deliveredStocks);

  //Създаване копие на обект: Вариант 1
  //   const allProducts = {...inStock};

  //Създаване копие на обект: Вариант 2
  const allProducts = structuredClone(inStock); // създаваме копие на оригиналния масив inStock. Модифицираме копието като имаме запазен оригинала;

  //Създаване копие на обект: Вариант 3
  //   const allProducts = Object.assign({}, inStock);

  Object.keys(ordered) // метод, който приема обект и връща всички ключове, които обект съдържа;
    .forEach((productName) => {
      //console.log(productName); тест дали работи;
      if (!allProducts[productName]) {
        // ако продукта го няма;
        allProducts[productName] = 0; // създаваме продукта с първоначална стойност 0;
      }

      allProducts[productName] += ordered[productName]; // ако продукта съществува в обекта, добавяме количеството от стоката за доставка
    });

  //console.log(allProducts); проверяваме дали работи логиката;

  Object.entries(allProducts) //итерираме обекта;
    .forEach(([key, value]) => {
      //деструкторираме обекта на key и velue;
      console.log(`${key} -> ${value}`); //разпечатваме резулатата;
    });
}

solve(
  ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
  ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
);
