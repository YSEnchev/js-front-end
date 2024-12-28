function roadRadar(driverSpeed, area) {

    const motorwayLimit = 130;
    const interstateLimit = 90;
    const cityLimit = 50;
    const residentialLimit = 20;

    const speedingLimit = 20;
    const excessiveLimit = 40;

    switch (area) {
        case 'motorway':

            if (driverSpeed > motorwayLimit) {

                const differenceSpeed = driverSpeed - motorwayLimit;
                let speedStatus = '';

                if (differenceSpeed > excessiveLimit) {
                    speedStatus = 'reckless driving';
                } else if (differenceSpeed > speedingLimit) {
                    speedStatus = 'excessive speeding';
                } else {
                    speedStatus = 'speeding';
                }
                console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${motorwayLimit} - ${speedStatus}`);
            } else {
                console.log(`Driving ${driverSpeed} km/h in a ${motorwayLimit} zone`);
            }
            break;

        case 'interstate':
            if (driverSpeed > interstateLimit) {

                const differenceSpeed = driverSpeed - interstateLimit;
                let speedStatus = '';

                if (differenceSpeed > excessiveLimit) {
                    speedStatus = 'reckless driving';
                } else if (differenceSpeed >= speedingLimit) {
                    speedStatus = 'excessive speeding';
                } else {
                    speedStatus = 'speeding';
                }
                console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${interstateLimit} - ${speedStatus}`);
            } else {
                console.log(`Driving ${driverSpeed} km/h in a ${interstateLimit} zone`);
            }
            break;

        case 'city':
            if (driverSpeed > cityLimit) {

                const differenceSpeed = driverSpeed - cityLimit;
                let speedStatus = '';

                if (differenceSpeed > excessiveLimit) {
                    speedStatus = 'reckless driving';
                } else if (differenceSpeed > speedingLimit) {
                    speedStatus = 'excessive speeding';
                } else {
                    speedStatus = 'speeding';
                }
                console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${cityLimit} - ${speedStatus}`);
            } else {
                console.log(`Driving ${driverSpeed} km/h in a ${cityLimit} zone`);
            }
            break;

        case 'residential':
            if (driverSpeed > residentialLimit) {

                const differenceSpeed = driverSpeed - residentialLimit;
                let speedStatus = '';

                if (differenceSpeed > excessiveLimit) {
                    speedStatus = 'reckless driving';
                } else if (differenceSpeed > speedingLimit) {
                    speedStatus = 'excessive speeding';
                } else {
                    speedStatus = 'speeding';
                }
                console.log(`The speed is ${differenceSpeed} km/h faster than the allowed speed of ${residentialLimit} - ${speedStatus}`);
            } else {
                console.log(`Driving ${driverSpeed} km/h in a ${residentialLimit} zone`);
            }
            break;
    }
}

roadRadar(100, 'motorway');
