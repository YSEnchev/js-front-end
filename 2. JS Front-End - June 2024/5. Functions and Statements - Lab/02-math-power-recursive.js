function recursivePower(base, power) {
  if (power === 1) {
    return base;
  }

  return base * recursivePower(base, power - 1);
}

function mathPower(base, power) {
  const res = recursivePower(base, power);
  console.log(res);
}

mathPower(2, 8);
