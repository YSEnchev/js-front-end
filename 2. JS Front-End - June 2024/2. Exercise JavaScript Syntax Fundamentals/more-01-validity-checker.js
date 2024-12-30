
function validityChecker(x1, y1, x2, y2) {

    function calcDistance(x, y) {
        return Math.sqrt(x ** 2 + y ** 2);
    }

    const distance1 = calcDistance(x1, y1);
    const distance2 = calcDistance(x2, y2);
    const distance3 = calcDistance(x1 - x2, y1 - y2);

    if (Number.isInteger(calcDistance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(calcDistance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (
        Number.isInteger(distance1) &&
        Number.isInteger(distance2) &&
        Number.isInteger(distance3)
    ) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}

validityChecker(2, 1, 1, 1);