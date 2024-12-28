function multiplicationTable (number) {

    let countLoop = 0;
    let finalSum = 0;

    for (let index = 1; index <= 10; index++) {
        countLoop = index
        finalSum = number * index;
        console.log(`${number} X ${countLoop} = ${finalSum}`);
    }
}

multiplicationTable (10)