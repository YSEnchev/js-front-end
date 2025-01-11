function bitcoinMining(input) {
  const bitcoinValue = 11949.16;
  const goldValue = 67.51;

  let moneyEarned = 0;
  let boughtBitcoins = 0;
  let dayOfFirstBought = 0;

  for (let day = 0; day < input.length; day++) {
    if (day > 0 && day % 2 === 0) {
      moneyEarned += input[day] * 0.7 * goldValue;
    } else {
      moneyEarned += input[day] * goldValue;
    }

    if (moneyEarned >= bitcoinValue) {
      let bitcoinPurchase = Math.floor(moneyEarned / bitcoinValue);
      moneyEarned -= bitcoinValue * bitcoinPurchase;
      boughtBitcoins += bitcoinPurchase;

      if (dayOfFirstBought == 0) {
        dayOfFirstBought = day + 1;
      }
    }
  }

  console.log(`Bought bitcoins: ${boughtBitcoins}`);
  console.log(
    boughtBitcoins > 0
      ? `Day of the first purchased bitcoin: ${dayOfFirstBought} \nLeft money: ${moneyEarned.toFixed(
          2
        )} lv.`
      : `Left money: ${moneyEarned.toFixed(2)} lv.`
  );
}

bitcoinMining([100, 200, 300]);
