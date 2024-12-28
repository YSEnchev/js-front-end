function num(number) {

    const numAsString = number.toString();
    let isSame = true;
    let lastDigit = '';
    let sum = 0;

    for (let index = 0; index < numAsString.length; index++) {

        const digitAsString = numAsString[index];

        if (!!lastDigit && digitAsString !== lastDigit) {
            isSame = false;
        }

        lastDigit = digitAsString;
        sum += Number(digitAsString);
    }

    console.log(isSame);
    console.log(sum);

}

num(2222222)