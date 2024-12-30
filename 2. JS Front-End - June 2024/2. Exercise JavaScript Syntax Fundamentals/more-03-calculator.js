
function calculator(numbFirst, operand, numbSecond) {

    let finalSum = 0;

    switch (operand) {

        case '+':
            finalSum = numbFirst + numbSecond;
            break;

        case '-':
            finalSum = numbFirst - numbSecond;
            break;

        case '/':
            finalSum = numbFirst / numbSecond;
            break;

        case '*':
            finalSum = numbFirst * numbSecond;
            break;
    }

    console.log(parseFloat(finalSum).toFixed(2));

}

calculator(25.5,
    '-',
    3
);