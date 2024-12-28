function leapYear(year) {

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    console.log(isLeap ? 'yes' : 'no');

    // Option 2:
    // if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    //     console.log('yes');
    // } else {
    //     console.log('no');
    // }
}

leapYear(1984);
leapYear(2003);
leapYear(4);