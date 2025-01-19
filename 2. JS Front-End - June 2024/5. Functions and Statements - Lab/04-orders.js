function orders(product, quantity) {
  let totalPrice = 0;

  coffeePrice = 1.5;
  waterPrice = 1.0;
  cokePrice = 1.4;
  snacksPrice = 2.0;

  switch (product.toLowerCase()) {
    case 'coffee':
      totalPrice = quantity * coffeePrice;
      break;
    case 'water':
      totalPrice = quantity * waterPrice;
      break;
    case 'coke':
      totalPrice = quantity * cokePrice;
      break;
    case 'snacks':
      totalPrice = quantity * snacksPrice;
      break;
  }
  console.log(totalPrice.toFixed(2));
}

orders('water', 5);
orders('coffee', 2);
