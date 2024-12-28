function vacation(countPeople, type, day) {

    let price = 0;
    let totalPrice = 0;
    let discountPrice = 0;

    switch (type) {

        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.80;
            } else if (day === 'Sunday') {
                price = 10.46;
            }

            if (countPeople >= 30) {
                totalPrice = countPeople * price;
                discountPrice = totalPrice - (totalPrice * 0.15);

                console.log(`Total price: ${discountPrice.toFixed(2)}`);

            } else {
                totalPrice = countPeople * price;

                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            }
            break;

        case 'Business':
            if (day === 'Friday') {
                price = 10.90;
            } else if (day === 'Saturday') {
                price = 15.60;
            } else if (day === 'Sunday') {
                price = 16;
            }

            if (countPeople >= 100) {
                countPeople = countPeople - 10;
                discountPrice = countPeople * price;

                console.log(`Total price: ${discountPrice.toFixed(2)}`);

            } else {
                totalPrice = countPeople * price;

                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            }
            break;

        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.50;
            }

            if (countPeople >= 10 && countPeople <= 20) {
                totalPrice = countPeople * price;
                discountPrice = totalPrice - (totalPrice * 0.05);

                console.log(`Total price: ${discountPrice.toFixed(2)}`);

            } else {
                totalPrice = countPeople * price;

                console.log(`Total price: ${totalPrice.toFixed(2)}`);
            }
            break;
    }
}

vacation(30, 'Students', 'Sunday')