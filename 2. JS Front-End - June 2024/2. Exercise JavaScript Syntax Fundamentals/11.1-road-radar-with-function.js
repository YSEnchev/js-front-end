function roadRadar(driverSpeed, area) {

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    switch (area) {
        case 'motorway':
            printResult(driverSpeed, motorwayLimit);
            break;

        case 'interstate':
            printResult(driverSpeed, interstateLimit);
            break;

        case 'city':
            printResult(driverSpeed, cityLimit);
            break;

        case 'residential':
            printResult(driverSpeed, residentialLimit);
            break;
    }
}

roadRadar(120, 'interstate');


function printResult(speed, areaLimit) {

    const speedingLimit = 20;
    const excessiveLimit = 40;

    if (speed > areaLimit) {

        const differenceSpeed = speed - areaLimit;
        let speedStatus = '';

        if (differenceSpeed > excessiveLimit) {
            speedStatus = 'reckless driving';
        } else if (differenceSpeed > speedingLimit) {
            speedStatus = 'excessive speeding';
        } else {
            speedStatus = 'speeding';
        }
        console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${areaLimit} - ${speedStatus}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${areaLimit} zone`);
    }
}
