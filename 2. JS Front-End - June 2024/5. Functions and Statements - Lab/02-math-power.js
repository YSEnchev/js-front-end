function iterPower(base, power) {
  let result = 1;

  for (let index = 0; index < power; index++) {
    result *= base;
  }
  return result;
}

function mathPower(base, power) {
  // console.log(base ** power);
  //or
  // let result = Math.pow(base, power);

  const res = iterPower(base, power);
  console.log(res);
}

mathPower(2, 8);
