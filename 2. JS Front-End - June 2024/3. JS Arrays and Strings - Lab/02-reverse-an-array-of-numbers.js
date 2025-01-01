function reverseAnArrayOfNumbers(input, Array) {

    let newArray = [];
    let reverseArray = [];

    for (let index = 0; index < Array; index++) {
        newArray += index;
    }

    for (let index = newArray - 1; index >= 0; index--) {
        reverseArray += index
    }

    console.log(reverseArray);
    

}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);