
function spiceMustFlow(startingYield) {

    let collectedYield = 0;
    let daysOfWork = 0;

    while (startingYield >= 100) {
        collectedYield += startingYield - 26;
        daysOfWork++;
        startingYield -= 10;
    }

    if (collectedYield >= 26) {
        console.log(daysOfWork);
        console.log(collectedYield - 26);
    } else {
        console.log(daysOfWork);
        console.log(0);
    }
}

spiceMustFlow(111)


// 1.Начален добив 110
// 2. Всеки следващ ден намалява с 10 от предходния
// 3. Печеливш до 100 -> под 100 го изоставаме
// 4. Консумация 26 на ден + 26 след изчерпване на мината, при наличност в склада

// Print:
// 1. Колко дни е работила
// 2. Общо количество добита подправка